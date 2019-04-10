import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Animations} from "../../utils/animations";
import {MessagesComponent} from "../../messages/messages.component";
import {Message} from "../../classes/message";
import {StringArrayLookPipe} from "../../utils/string-array-look.pipe";
import {MessageClass} from "../../classes/message-class.enum";
import {ConfirmationDialogComponent} from "../../confirmation-dialog/confirmation-dialog.component";
import {HttpClient} from "@angular/common/http";
import {TestsService} from "../tests.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {isEqual} from 'lodash';

@Component({
    selector: 'prm-subscribe-tests',
    templateUrl: './subscribe-tests.component.html',
    styleUrls: ['./subscribe-tests.component.scss'],
    animations: [
        Animations.fadeOutAnimation
    ]
})
export class SubscribeTestsComponent implements OnInit {

    @ViewChild(MessagesComponent)
    private messagesElement: MessagesComponent;

    public checkedSuites: boolean[];
    private _suites: string[];
    public signUpClicked: boolean;
    public signUpInProgress: boolean;
    private suitesToSignUp: string[];
    private isSignedUp: boolean;
    public removeTestsInProgress: boolean;
    private removeTestsDialogRef: MatDialogRef<ConfirmationDialogComponent>;
    public changeDone: boolean;
    private unsubscribeSuccessfully: boolean;

    constructor(public http: HttpClient,
                public testsService: TestsService,
                public dialogService: MatDialog) {
        this.signUpClicked = false;
        this.signUpInProgress = false;
        this.isSignedUp = false;
        this.removeTestsInProgress = false;
        this.unsubscribeSuccessfully = false;
        this.changeDone = false;
        this.checkedSuites = [];
        this.suitesToSignUp = [];
    }

    ngOnInit() {
        this.testsService.fetchSuites().subscribe(data => {
            this._suites = data;
            this.checkedSuites = new Array(this.suites.length).fill(false);
            this.testsService.getSignedSuites().subscribe(signedSuites => {
                this.isSignedUp = signedSuites.suites !== undefined && signedSuites.suites.length;
                if (this.isSignedUp) {
                    this.testsService.isSubscribed = true;
                    this.checkedSuites = this.suites.map(suite => signedSuites.suites.indexOf(suite) > -1);
                    this.suitesToSignUp = this.suites.filter((v, i) => this.checkedSuites[i]);
                } else {
                    this.testsService.isSubscribed = false;
                }
            });
        });
    }

    get suites(): string[] {
        return this._suites;
    }

    setSuite(i: number, checked: boolean) {
        this.checkedSuites[i] = checked;
        this.changeDone = true;
    }

    showSelectAll() {
        return this.checkedSuites.length === 0 || this.checkedSuites.some(v => v === false);
    }

    selectAll() {
        this.checkedSuites.fill(true);
        this.changeDone = true;
    }

    unselectAll() {
        this.checkedSuites.fill(false);
        this.changeDone = true;
    }

    signUp() {
        this.signUpClicked = true;
        let suitesToSignUp = this.suites.filter((v, i) => this.checkedSuites[i]);
        if (!this.signUpError() && !isEqual(this.suitesToSignUp.sort(), suitesToSignUp.sort())) {
            this.signUpInProgress = true;
            this.suitesToSignUp = suitesToSignUp;
            this.testsService.signUp(this.suitesToSignUp).subscribe(() => {
                this.testsService.isSubscribed = true;
                this.messagesElement.setMessage(
                    new Message('You subscribed successfully to:' +
                        new StringArrayLookPipe().transform(this.suitesToSignUp) + '.\n' +
                        'Your tests will run within the next 24 hours.\n' +
                        'Results can be found here after that time.',
                        [MessageClass.success]));
                this.signUpInProgress = false;
                this.unsubscribeSuccessfully = false;
                this.isSignedUp = true;
            });
        } else if (this.signUpError()) {
            this.messagesElement.setMessage(
                new Message(
                    "Error: You need to check one or more of the following checkboxes",
                    [MessageClass.error]
                )
            );
        } else {
            this.messagesElement.setMessage(
                new Message(
                    "You are already subscribed to the following tests",
                    [MessageClass.warning]
                )
            )
        }
    }

    removeAllTests() {
        this.removeTestsDialogRef = this.dialogService.open(ConfirmationDialogComponent, {
            disableClose: false,
            width: "450px",
            height: "fit-content",
            panelClass: "custom-dialog-container"
        });
        this.removeTestsDialogRef.componentInstance.confirmationMessage = "Are you sure you want to unsubscribe to all tests?";
        this.removeTestsDialogRef.componentInstance.confirmButtonText = "unsubscribe";
        this.removeTestsDialogRef.componentInstance.confirmationTitle = "unsubscribe";

        this.removeTestsDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.testsService.removeSignedParams().subscribe(() => {
                    this.isSignedUp = false;
                    this.testsService.isSubscribed = false;
                    this.signUpClicked = false;
                    this.unsubscribeSuccessfully = true;
                    this.messagesElement.setMessage(
                        new Message(
                            'You unsubscribed successfully from all tests.',
                            [MessageClass.success]
                        )
                    );
                    this.suitesToSignUp = [];
                });
            }
            this.removeTestsDialogRef = null;
        })
    }

    public isAllCheckedSuitesFalse(): boolean {
        return this.checkedSuites.every(v => v === false)
    }

    signUpError() {
        return this.isAllCheckedSuitesFalse() && this.signUpClicked && !this.isSignedUp;
    }
}

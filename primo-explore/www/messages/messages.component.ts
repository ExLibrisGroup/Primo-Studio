import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../classes/message";
import {timer} from "rxjs";
import {Animations} from "../utils/animations";

@Component({
    selector: 'prm-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    animations: [
        Animations.fadeOutAnimation,
        Animations.fadeInAnimation
    ]
})
export class MessagesComponent implements OnInit {
    public messages: Message[];

    @Input()
    public durationInMilliseconds: number;

    constructor() {
        this.messages = [];
    }

    ngOnInit() {
    }

    public setMessage(message: Message) {
        this.messages.push(message);
        if (this.durationInMilliseconds) {
            timer(this.durationInMilliseconds).subscribe(() => {
                let i = this.messages.indexOf(message);
                if (i > -1) {
                    this.messages.splice(i, 1);
                }
            });
        }
    }

}

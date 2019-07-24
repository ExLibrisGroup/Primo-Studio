import {Component, OnInit} from '@angular/core';
import {Animations} from "../utils/animations";
import {TestsService} from "./tests.service";

@Component({
    selector: 'prm-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.scss'],
    animations: [
        Animations.fadeInAnimation,
        Animations.fadeOutAnimation
    ]
})
export class TestsComponent implements OnInit {
    constructor(public testService: TestsService) {    }

    ngOnInit() {    }

    get isSubscribed(): boolean {
        return this.testService.isSubscribed;
    }
}

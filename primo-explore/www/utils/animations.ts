import {animate, state, style, transition, trigger} from "@angular/animations";

export class Animations {

    static fadeInAnimation = trigger('fadeInAnimation',
        [
            transition(':enter', [
                style({
                    opacity: 0,
                    transition: 'opacity .2s ease'
                }),
                animate('400ms', style({opacity: 1}))
            ])
        ]);

    static fadeOutAnimation = trigger('fadeOutAnimation',
        [
            transition(':leave', [
                style({
                    opacity: 1,
                    transition: 'opacity .15s ease'
                }),
                animate('400ms', style({opacity: 0}))
            ])
        ]);
    static easeInOutAnimation = trigger('easeInOutAnimation',
        [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate('600ms ease-in', style({opacity: 1}))
            ]),
            transition(':leave', [
                style({
                    opacity: 1
                }),
                animate('600ms ease-out', style({opacity: 0}))
            ])
        ]);
}

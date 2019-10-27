import {OneTimeBindingDirective} from './one-time-binding.directive';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('OneTimeBindingDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                OneTimeBindingDirective
            ]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should not change on data changed', () => {
        let original_text = component.text;
        let other_text = 'other text';
        let divElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('div');

        component.setBinding(false);
        component.text = other_text;
        component.directive.ngAfterViewChecked();
        fixture.detectChanges();

        expect(divElement.innerText).toEqual(original_text);
        expect(divElement.innerText).not.toEqual(other_text);
    });

    it('should change on data changed', () => {
        let original_text = component.text;
        let other_text = 'other text';
        let divElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('div');

        component.setBinding(true);
        component.text = other_text;
        component.directive.ngAfterViewChecked();
        fixture.detectChanges();

        expect(divElement.innerText).not.toEqual(original_text);
        expect(divElement.innerText).toEqual(other_text);
    });
});

@Component({
    template: '<div *oneTimeBinding="toNotBind">{{text}}</div>'
})
class TestComponent {
    public text: string;
    public toNotBind: boolean;

    @ViewChild(OneTimeBindingDirective, {static: false})
    directive: OneTimeBindingDirective;

    constructor() {
        this.text = 'test text';
        this.toNotBind = true;
    }

    setBinding(toBind) {
        this.toNotBind = !toBind;
    }
}

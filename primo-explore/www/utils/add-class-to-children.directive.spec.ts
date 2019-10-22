import {AddClassToChildrenDirective} from './add-class-to-children.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import * as _ from 'lodash';

describe('AddClassToChildrenDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                AddClassToChildrenDirective
            ]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should add class to all children', () => {
        fixture.detectChanges();

        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const div: HTMLElement = debugEl.querySelector('div');
        const children: HTMLCollection = div.children;

        _.forEach(children, element => {
            expect(element.className).toEqual('added');
        });
    });
});


@Component({
    template: '<div add-class-to-children="added"><span>a</span><span>b</span></div>'
})
class TestComponent {
    constructor() {
    }
}

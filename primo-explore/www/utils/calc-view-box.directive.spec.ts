import {CalcSVGViewBoxDirective} from './calc-view-box.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';

describe('CalcSVGViewBoxDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                CalcSVGViewBoxDirective
            ]
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should set x, y, height, width', () => {
        let val = {
            x: 0,
            y: 0,
            height: 12,
            width: 12
        };
        let svgRect = {
            baseVal: val,
            animVal: val
        };
        component.setSvgRect(svgRect);
        fixture.detectChanges();

        let debugEl: HTMLElement = fixture.debugElement.nativeElement;
        let svgEl: SVGSVGElement = debugEl.querySelector('svg');

        expect(svgEl.getAttribute('x')).toEqual('0');
        expect(svgEl.getAttribute('y')).toEqual('0');
        expect(svgEl.getAttribute('height')).toEqual('24');
        expect(svgEl.getAttribute('width')).toEqual('24');
    });
});

@Component({
    template: `
        <svg [calcSVGViewBox]="svgRect"></svg>`
})
class TestComponent {
    public svgRect: SVGAnimatedRect;

    constructor() {    }

    setSvgRect(svgRect): void {
        this.svgRect = svgRect;
    }

}

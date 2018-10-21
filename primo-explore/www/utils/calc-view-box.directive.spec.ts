import { CalcSVGViewBoxDirective } from './calc-view-box.directive';
import {TestBed} from "../../node_modules/@angular/core/testing";

describe('CalcSVGViewBoxDirective', () => {
  let directive: CalcSVGViewBoxDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcSVGViewBoxDirective]
    });
    directive = TestBed.get(CalcSVGViewBoxDirective);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});

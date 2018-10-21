import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[calcSVGViewBox]'
})
export class CalcSVGViewBoxDirective {

  private viewBox: SVGAnimatedRect;

  constructor(private elementRef: ElementRef) { }

  @Input()
  set calcSVGViewBox(viewBox: SVGAnimatedRect) {
      this.viewBox = viewBox;
      let bias = 1;
      if (viewBox.baseVal.height !== 24 || viewBox.baseVal.width !== 24) {
        let max = Math.max(viewBox.baseVal.height, viewBox.baseVal.width);
        bias = 24 / max;
      }

      let x = viewBox.baseVal.x;
      let y = viewBox.baseVal.y;
      let height = viewBox.baseVal.height;
      let width = viewBox.baseVal.width;

      this.elementRef.nativeElement.setAttribute('x', x);
      this.elementRef.nativeElement.setAttribute('y', y);
      this.elementRef.nativeElement.setAttribute('height', height * bias);
      this.elementRef.nativeElement.setAttribute('width', width * bias);
      this.elementRef.nativeElement.setAttribute('viewBox', `${x} ${y} ${height} ${width}`);
  }

  get calcSVGViewBox(): SVGAnimatedRect {
    return this.viewBox;
  }

}

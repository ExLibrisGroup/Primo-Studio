import {AfterViewChecked, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[add-class-to-children]',
})
export class AddClassToChildrenDirective implements AfterViewChecked{

  @Input('add-class-to-children')
  private addClassToChildren: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {

  }

  ngAfterViewChecked(): void {
    let children = this.element.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      this.renderer.addClass(children[i], this.addClassToChildren);
    }
  }

}

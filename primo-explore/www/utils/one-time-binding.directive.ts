import {AfterViewChecked, Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[oneTimeBinding]'
})
export class OneTimeBindingDirective implements AfterViewChecked {

    private noCheck: boolean = true;
    private detached: boolean = false;
    private view: EmbeddedViewRef<NgNoCheckContext>;

    constructor(private template: TemplateRef<NgNoCheckContext>, private vcRef: ViewContainerRef) {
        this.view = this.vcRef.createEmbeddedView(this.template, { $implicit: this });
    }

    @Input()
    set oneTimeBinding(value: boolean) {
        this.noCheck = value !== false;

        if (this.detached && !this.noCheck) {
            this.view.reattach();
            this.detached = false;
        }
    }

    ngAfterViewChecked(): void {
        if (!this.detached && this.noCheck) {
            this.view.detach();
            this.detached = true;
        }
    }

    check(): void {
        if (this.detached) {
            this.view.detectChanges();
        }
    }
}

export interface NgNoCheckContext {
    $implicit: OneTimeBindingDirective;
}

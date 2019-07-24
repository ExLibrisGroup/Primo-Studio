export class TemplateContentField {
    public inserted: boolean;
    constructor(public name: string, public repeatable: boolean, public component?: string, public parameters?: string){
        this.inserted = false;
    }

    calculateTemplate() :string {
        let component = this.component ? this.component : 'div';
        return `<${component} ${this.parameters ? this.parameters : 'class="' + this.name.replace(' ', '_') + '"'}></${component}>`;
    }
}

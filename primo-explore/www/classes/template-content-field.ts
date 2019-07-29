export class TemplateContentField {
    public inserted: boolean;
    public component: string;
    public parameters: string;
    public content: string;

    constructor(public name: string, public repeatable: boolean, public options?: {component?: string, parameters?: string, content?: string}){
        this.inserted = false;
        if (this.options) {
            this.component = this.options.component;
            this.parameters = this.options.parameters;
            this.content = this.options.content;
        }
    }

    calculateTemplate() :string {
        let component = this.component ? this.component : 'div';
        return `<${component} ${this.parameters ? this.parameters : 'class="' + this.name.replace(' ', '_') + '"'}>`+
                   `${this.content ? this.content : ''}`+
               `</${component}>`;
    }
}

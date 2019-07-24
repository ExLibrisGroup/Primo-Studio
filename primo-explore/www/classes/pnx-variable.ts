import {TextFormatPipe} from '../utils/text-format.pipe';

export class PnxVariable {
    constructor(public name: string, public path: string, public inserted: boolean){}

    calculateTemplate() {
        return `<div ng-if='item.${this.path}'>` +
            `${new TextFormatPipe().transform(this.name)}: {{item.${this.path}}}` +
            `</div>\n`;
    }
}

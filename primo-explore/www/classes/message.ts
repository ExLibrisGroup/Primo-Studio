import {MessageClass} from "./message-class.enum";

export class Message {
    constructor(public content: string,
                public classes: MessageClass[]){};
}

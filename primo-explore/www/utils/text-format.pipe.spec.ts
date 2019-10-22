import {TextFormatPipe} from './text-format.pipe';

describe('TextFormatPipe', () => {
    let pipe: TextFormatPipe;

    beforeEach(() => {
        pipe = new TextFormatPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should convert "any string" to "Any String"', () => {
        let original = "any string";

        let result = pipe.transform(original);

        expect(result).toEqual("Any String");
    });
});

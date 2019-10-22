import {SliceCustomizationPathPipe} from './slice-customization-path.pipe';

describe('SliceCustomizationPathPipe', () => {
    let pipe: SliceCustomizationPathPipe;

    beforeEach(() => {
        pipe = new SliceCustomizationPathPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should reduce ["this", "doesn\'t", "need", "to", "stay", "here"] to ["need", "to", "stay"]', () => {
        let original = ["this", "doesn't", "need", "to", "stay", "here"];

        let result = pipe.transform(original);

        expect(result).toEqual(["need", "to", "stay"]);
    });

    it('should transform nothing to be null', () => {
        let original = undefined;

        let result = pipe.transform(original);

        expect(result).toBeNull();
    });
});

import {SplitPathPipe} from './split-path.pipe';

describe('SplitPathPipe', () => {
    let pipe: SplitPathPipe;

    beforeEach(() => {
        pipe = new SplitPathPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should split "text/to/split/" to ["text", "to", "split", ""]', () => {
        let original = "text/to/split/";

        let result = pipe.transform(original);

        expect(result).toEqual(["text", "to", "split", ""]);
    });

    it('should transform nothing to be null', () => {
        let original = undefined;

        let result = pipe.transform(original);

        expect(result).toBeNull();
    });
});

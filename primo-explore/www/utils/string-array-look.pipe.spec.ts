import {StringArrayLookPipe} from './string-array-look.pipe';

describe('StringArrayLookPipe', () => {
    let pipe: StringArrayLookPipe;

    beforeEach(() => {
        pipe = new StringArrayLookPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform ["a", "b"] to "a, b"', () => {
        let arr = ["a", "b"];

        let result = pipe.transform(arr);

        expect(result).toEqual("a, b");
    })
});

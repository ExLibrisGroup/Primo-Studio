import {MapByPipe} from './map-by.pipe';

describe('MapByPipe', () => {
    let pipe: MapByPipe;

    beforeEach(() => {
        pipe = new MapByPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should map [{"foo": true, "number": 1}, {"foo": false, "number": 2}] by "foo" to [true, false]', () => {
        let arr = [
            {'foo': true, 'number': 1},
            {'foo': false, 'number': 2}
        ];

        let result = pipe.transform(arr, 'foo');

        expect(result).toEqual([true, false]);
    });
});

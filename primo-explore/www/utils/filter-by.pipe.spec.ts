import {FilterByPipe} from './filter-by.pipe';

describe('FilterByPipe', () => {
    let pipe: FilterByPipe;

    beforeEach(() => {
        pipe = new FilterByPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should filter [{"foo": true, "number": 1}, {"foo": false, "number": 2}] by "foo" to [{"foo": true, "number": 1}]', () => {
        let arr = [
            {'foo': true, 'number': 1},
            {'foo': false, 'number': 2}
        ];

        arr = pipe.transform(arr, 'foo');

        expect(arr).toEqual([{foo: true, number: 1}]);
    });
});

import {SearchIconPipe} from './search-icon.pipe';

describe('SearchIconPipe', () => {
    let pipe: SearchIconPipe;

    beforeEach(() => {
        pipe = new SearchIconPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
});

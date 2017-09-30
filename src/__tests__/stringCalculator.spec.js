import {add} from '../stringCalculator';

const EMPTY_STRING = '';

describe('add', () => {
    it('returns 0 when empty string is passed', () => {
        const actual = add(EMPTY_STRING);

        expect(actual).toBe(EMPTY_STRING);
    });

    it('returns the first argument when it only contains one number', () => {
        const actual = add('1');

        expect(actual).toBe('1');
    });

    it('returns the sum of 2 numbers, when they are passed with a , delimeter;', () => {
        const actual1 = add('1,1');
        const actual2 = add('345,543');

        expect(actual1).toBe('2');
        expect(actual2).toBe('888');
    });
});

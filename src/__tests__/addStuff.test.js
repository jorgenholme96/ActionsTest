import { addStuff } from '../testCode';

describe('addStuff', () => {
    it('should add stuff', () => {
        const result = addStuff(2, 2);

        expect(result).toBe(4);
    });
});

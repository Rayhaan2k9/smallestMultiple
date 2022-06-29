
const smallestMultiple = require("../smallestMultiple")

describe('smallestMultiple', () => {
    test('should return a number', () => {
        expect(typeof smallestMultiple(10)).toBe("number")
    });
    test('should return the smallest multiple of given number', () => {
        expect(smallestMultiple(10)).toBe(2520)
    });
});
const MathGcd = require("../Math.gcd")

describe('MathGcd', () => {
    test('should return a number', () => {
        expect(typeof MathGcd(10, 9)).toBe("number")
    });

    test('should return greatest common divisor of 2 numbers', () => {
        expect(MathGcd(10, 9)).toBe(1)
        expect(MathGcd(12, 4)).toBe(4)
    });
});
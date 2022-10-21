
const calc = require("./calc.js");

describe("calculator test suite", () => {
    let calculator = new calc();

    test("calculator instance",()=>{
        expect(calculator instanceof calc).toBe(true);
    })
    test("sum", () => {
        expect(calculator.sum(1, 2)).toBe(3);
    });

    test("subtract", () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test("multiply", () => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });
})


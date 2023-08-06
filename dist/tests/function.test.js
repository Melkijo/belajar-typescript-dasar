"use strict";
describe('Function', () => {
    it("should support in typescript", () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Melki")).toBe("Hello Melki");
        function printHello(name) {
            console.log(`Hello ${name}`);
        }
        printHello("Melki");
    });
    it("should support default value", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
    });
    it("should support rest parameter", () => {
        function sum(...values) {
            let res = 0;
            for (const value of values) {
                res += value;
            }
            return res;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", () => {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Melki")).toBe("Hello Melki");
        expect(sayHello("Melki", "Jonathan")).toBe("Hello Melki Jonathan");
    });
    it("should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 100;
            }
            expect(callMe("Melki")).toBe("MELKI");
            expect(callMe(10)).toBe(100);
        }
    });
    it("should support function parameter", () => {
        const sayHello = (name, filter) => {
            return `Hello ${filter(name)}`;
        };
        const toUpper = (name) => {
            return name.toUpperCase();
        };
        expect(sayHello("Melki", toUpper)).toBe("Hello MELKI");
        //anonymous function
        expect(sayHello("Melki", (name) => {
            return name.toUpperCase();
        })).toBe("Hello MELKI");
    });
});

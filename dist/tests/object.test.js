"use strict";
describe('Object', () => {
    it("should support in typescript", () => {
        const person = {
            id: "1",
            name: "Supri"
        };
        console.log(person);
        person.id = "5";
        console.log(person);
    });
});

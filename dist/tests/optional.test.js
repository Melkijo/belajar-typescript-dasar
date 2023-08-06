"use strict";
describe('Optional Parameter', () => {
    it("should support null and undefined", () => {
        //optional parameter 
        function sayHello(name) {
            if (name) {
                console.info("Hello", name);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Melki");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});

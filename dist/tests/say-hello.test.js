import { sayHello } from "../src/say-hello";
describe('sayHello', () => {
    it("should return hello melki", function () {
        expect(sayHello('melki')).toBe("hello melki");
    });
});

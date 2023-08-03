"use strict";
describe('Array', () => {
    it('should same with javascript', () => {
        const names = ["melki", "jo", "andara"];
        const balance = [50000, 4000, 200];
        console.info(names);
        console.info(balance);
    });
    it('should support readonly array', () => {
        const games = ['pokemon', 'doraemon', 'sinchan'];
        console.info(games);
    });
    // tupple : array type value have been declared and readonly
    it("should support tupple", () => {
        const film = ["john", "doe", 50];
        // film[0] = "Hello";
        console.info(film);
    });
});

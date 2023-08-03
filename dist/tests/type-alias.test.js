describe('Type Alias', () => {
    it("should support in typescript", () => {
        const category = {
            id: "1",
            name: "pecah belah"
        };
        const product = {
            id: "1",
            name: "piring",
            price: 5000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};

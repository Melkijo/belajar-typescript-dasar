import { CustomerType } from "../src/enum";
describe('Enum', () => {
    it("should support in typescript", () => {
        const customer = {
            id: 5,
            name: "rudi",
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});

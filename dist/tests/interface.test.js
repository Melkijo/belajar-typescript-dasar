describe('Interface', () => {
    it("should support in typescript", () => {
        const seller = {
            id: 5,
            name: "supri",
            nib: "12321"
        };
        console.info(seller);
    });
    it("should support function interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 5)).toBe(7);
    });
    it("should support indexable interface", () => {
        const animals = ["Singa", "Macan", "kodok"];
        console.info(animals);
        animals[0] = "Kumbang";
        console.info(animals);
        expect(animals[0]).toBe("Kumbang");
    });
    it("should support indexable interface non number index", () => {
        const dictionary = {
            "name": "Melki",
            "address": "Melati"
        };
        expect(dictionary["name"]).toBe("Melki");
    });
    it("should support extends interface", () => {
        const employee = {
            id: "1",
            name: "Rudi",
            division: "tech"
        };
        console.log(employee);
        const manager = {
            id: "2",
            name: "Salim",
            division: "tech",
            numberOfEmployees: 5
        };
        console.log(manager);
    });
    it("should support function in interface", () => {
        const person = {
            name: "Melki",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.log(person.sayHello("Budi"));
    });
    it("should support intersection in interface", () => {
        const domain = {
            id: "1",
            name: "rudi"
        };
        console.log(domain);
    });
    it("should support type assertion", () => {
        const person = {
            id: "5",
            name: "Sasa"
        };
        // attention to the changed data must be in accordance with the interface
        const person2 = person;
        console.log(person2);
    });
});
export {};

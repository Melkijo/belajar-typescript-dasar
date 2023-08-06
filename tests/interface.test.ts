import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/interface"
import { Person } from "../src/person"

describe('Interface', () => {
  it("should support in typescript",()=>{
    const seller: Seller ={
        id:5,
        name: "supri",
        nib: "12321"
    }

    console.info(seller)
  })

  it("should support function interface",()=>{
    interface AddFunction{
        (val1:number, val2:number):number;
    }

    const add : AddFunction = (value1:number, value2:number):number=>{
        return value1 + value2
    }

    expect(add(2,5)).toBe(7)
  })

  it("should support indexable interface",()=>{
    interface ArrayString {
        [index: number]:string
    }

    const animals: ArrayString = ["Singa","Macan","kodok"];

    console.info(animals);

    animals[0] = "Kumbang";

    console.info(animals)

    expect(animals[0]).toBe("Kumbang")
  })

  it("should support indexable interface non number index",()=>{
    interface StringDictionary{
        [key:string]:string
    }

    const dictionary: StringDictionary = {
        "name" : "Melki",
        "address": "Melati"
    }

    expect(dictionary["name"]).toBe("Melki")
  })

  it("should support extends interface", () =>{
    const employee: Employee = {
        id: "1",
        name: "Rudi",
        division: "tech"
    }

    console.log( employee);

    const manager: Manager ={
        id: "2",
        name: "Salim",
        division: "tech",
        numberOfEmployees: 5
    }

    console.log(manager)
  })

  it("should support function in interface",()=>{
      

        const person:Person = {
            name: "Melki",
            sayHello: function(name:string):string{
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.log(person.sayHello("Budi"))
  })

  it("should support intersection in interface",()=>{
    interface HasName{
        name: string;
    }

    interface HasId {
        id: string;
    }

    type Domain = HasId & HasName;

    const domain:Domain ={
        id: "1",
        name: "rudi"
    }

    console.log(domain)
  })

  it("should support type assertion",()=>{
    const person: any ={
        id:"5",
        name: "Sasa"
    }
    // attention to the changed data must be in accordance with the interface
    const person2:Person = person as Person;

    console.log(person2);
    
  })
})

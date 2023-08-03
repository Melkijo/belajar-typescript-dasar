import { Seller } from "../src/interface"

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
})

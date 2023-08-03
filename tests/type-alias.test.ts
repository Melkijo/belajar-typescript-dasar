import { Category, Product } from "../src/type-alias"

describe('Type Alias', () => {
  it("should support in typescript", ()=>{
    const category: Category = {
        id:"1",
        name: "pecah belah",
        desc:"hati hati"
    }
    const product : Product = {
        id: "1",
        name: "piring",
        price:5000,
        category: category
    }

    console.info(category)
    console.info(product)
  })
})

describe('Object', () => {
  it("should support in typescript", ()=>{
    const person: {id:string, name:string} = {
        id: "1",
        name: "Supri"
    }

    console.log(person)

    person.id = "5";

    console.log(person)
  })
})

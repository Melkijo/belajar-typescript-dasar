describe("Data Type", function(){
    it("Should mush declare", ()=>{
        const name: string = "Melki";
        const balance: number = 10000;
        const isVip : boolean = true;

        console.log(name)
        console.log(balance)
        console.log(isVip)

    })


})

//Any will give variabel using any data type
describe("Any",()=>{
    it("should support in typescript",()=>{
        const person:any={
            id: 1,
            name: "supriadi",
            age: 18,
        }

        person.name= "Yanto"
        person.address = "Melati raya"
        console.info(person)
    })
})

//union is type to give spesific types of data
describe('Union', () => {
  it("should support in typescript",()=>{
    let sample :string | number | boolean=  "Hendri";

    console.log(sample);

    sample = 59
    console.log(sample);

    sample = true;

    console.log(sample);
  });

  it("should support in function", ()=>{
    const getSample = (value: string| number|boolean) => {
        if(typeof value === "string"){
            return value.toUpperCase();
        }else if(typeof value === "number"){
            return value + 2;
        }else{
            return !value;
        }
    }

    expect(getSample("josua")).toBe("JOSUA");
    expect(getSample(12)).toBe(14);
    expect(getSample(true)).toBe(false);

  })
})

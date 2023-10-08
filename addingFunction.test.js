const linearSearch = require("./linearSearch.js")

describe("Simple number search test", () =>{
    test("Testing linearSearch function to ensure it works properly", ()=>{
        expect(linearSearch(2, [1, 2, 3])).toBe(1)
    })
})

describe("Expecting not to be", () =>{
    test("Testing not.toBe", ()=>{
        expect(linearSearch(2, [1, 2, 3])).not.toBe(2)
    })
})
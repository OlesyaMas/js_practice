import { assert } from 'chai';

describe("Test2 Describe", () =>{

    // before("before all", () =>{
    //     console.log("Before all");
    // })

    // beforeEach("Before each", () =>{
    //     console.log("Before each");
    // })

    // after("After all", () =>{
    //     console.log("After all");
    // })

    // afterEach("After each", () =>{
    //     console.log("After each");
    // })

    it("Test sum 2 + 2", () =>{
        const expectedNumber = 4;
        const actualNumber = 2 + 2;
        assert.equal(actualNumber, expectedNumber);
    });

    it("Test value is true", () =>{
        const isTrue = true;
        assert.isTrue(isTrue);
    });

    it("Test value is null", () =>{
        const name = null;
        assert.isNull(name);
    });
})
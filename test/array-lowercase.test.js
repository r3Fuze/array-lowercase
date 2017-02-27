import {describe} from "ava-spec"
import {expect} from "chai"

import * as lower from "../src/array-lowercase"

const PROTO_FUNCTIONS = [
    "isAllStrings",
    "isLowerCase",
    "isUpperCase",
    "toLowerCase",
    "toUpperCase"
]

describe("Module", it => {
    it("should exist", () => {
        expect(lower).to.not.be.undefined
    })

    describe("isAllStrings()", it => {
        it("should throw an error if the argument is not an Array", () => {
            let fn = () => {
                lower.isAllStrings("not array")
            }

            expect(fn).to.throw("Argument must be an Array")
        })

        it("should return true an Array contains only Strings", () => {
            expect(lower.isAllStrings(["a", "B"])).to.be.true
            expect(lower.isAllStrings(["a", 1])).to.be.false
        })
    })

    describe("isLowerCase()", it => {
        it("should throw an error if the Array contains non String elements", () => {
            let fn = () => {
                lower.isLowerCase(["a", 1])
            }

            expect(fn).to.throw("Array contains non String elements")
        })

        it("should return true if all strings of an Array is lowercase", () => {
            expect(lower.isLowerCase(["a", "b"])).to.be.true
            expect(lower.isLowerCase(["a", "B"])).to.be.false
        })
    })

    describe("isUpperCase()", it => {
        it("should throw an error if the Array contains non String elements", () => {
            let fn = () => {
                lower.isUpperCase(["A", 1])
            }

            expect(fn).to.throw("Array contains non String elements")
        })

        it("should return true if all strings of an Array is uppercase", () => {
            expect(lower.isUpperCase(["A", "B"])).to.be.true
            expect(lower.isUpperCase(["a", "B"])).to.be.false
        })
    })

    describe("toLowerCase()", it => {
        it("should throw an error if the Array contains non String elements", () => {
            let fn = () => {
                lower.toLowerCase(["A", 1])
            }

            expect(fn).to.throw("Array contains non String elements")
        })

        it("should return a new Array with all Strings in lowercase", () => {
            let lowerCaseArray = lower.toLowerCase(["a", "B"])

            expect(lower.isLowerCase(lowerCaseArray)).to.be.true
        })
    })

    describe("toUpperCase()", it => {
        it("should throw an error if the Array contains non String elements", () => {
            let fn = () => {
                lower.toUpperCase(["A", 1])
            }

            expect(fn).to.throw("Array contains non String elements")
        })

        it("should return a new Array with all Strings in uppercase", () => {
            let upperCaseArray = lower.toUpperCase(["a", "B"])

            expect(lower.isUpperCase(upperCaseArray)).to.be.true
        })
    })

    describe("extend()", it => {
        it("should extend the Array prototype when called", () => {
            expect([]).to.not.respondTo("toLowerCase")
            lower.extend()
            expect([]).to.respondTo("toLowerCase")

            expect(["a", "B"].toLowerCase()).to.eql(["a", "b"])
        })

        it("should make arrays respond to all our functions", () => {
            for (let fn of PROTO_FUNCTIONS) {
                expect([]).to.respondTo(fn)
            }
        })
    })

    describe("checkArrayForStrings()", it => {
        it("should throw an error if the Array contains non String elements", () => {
            let fn = () => {
                lower.checkArrayForStrings(["a", 1])
            }

            expect(fn).to.throw("Array contains non String elements")
        })
    })
})

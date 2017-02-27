import {describe} from "ava-spec"
import {expect} from "chai"

import * as math from "../src/math"

describe("Math module", it => {
    it("should exist", () => {
        expect(math).to.exist
    })

    it("should have all it's functions", () => {
        expect(math.add).to.exist
        expect(math.add).to.be.a("function")

        expect(math.subtract).to.exist
        expect(math.subtract).to.be.a("function")

        expect(math.multiply).to.exist
        expect(math.multiply).to.be.a("function")
    })

    describe(".add()", it => {
        it("should return the sum of two numbers", () => {
            expect(math.add(1, 3)).to.equal(4)
        })
    })

    describe(".subtract()", it => {
        it("should return the difference of two numbers", () => {
            expect(math.subtract(42, 40)).to.equal(2)
        })
    })

    describe(".multiply()", it => {
        it("should return the first number multiplied by the second number", () => {
            expect(math.multiply(12, 10)).to.equal(120)
        })
    })
})

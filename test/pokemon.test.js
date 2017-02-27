import {describe} from "ava-spec"
import {expect} from "chai"

import * as pokemon from "../src/pokemon"

describe("Pokemon module", it => {
    it("should have some data", () => {
        expect(pokemon.all()).to.exist
    })

    describe(".all()", it => {
        it("should be an Array", () => {
            expect(pokemon.all()).to.be.an("array")
            expect(pokemon.all()).to.not.be.empty
        })

        it("should contain 'Charmander'", () => {
            expect(pokemon.all()).to.include("Charmander")
        })
    })

    describe(".random()", it => {
        it("should return a String", () => {
            let randomName = pokemon.random()
            expect(randomName).to.be.a("string")
            expect(randomName).to.not.be.empty
        })

        it("should return a random name from the list", () => {
            let randomName = pokemon.random()
            expect(pokemon.all()).to.include(randomName)
        })

        it("should return a list of names if passed a Number", () => {
            let randomNames = pokemon.random(3)
            expect(randomNames).to.be.an("array")
            expect(randomNames).to.not.be.empty
            expect(randomNames).to.have.lengthOf(3)

            randomNames.forEach(name => {
                expect(pokemon.all()).to.include(name)
            })
        })

        it("should throw an error if passed something other than a Number", () => {
            let fn = () => pokemon.random("should error")
            expect(fn).to.throw(/count must be a Number/)
        })
    })

    describe(".addCustom()", it => {
        it("should add a custom name to the list", () => {
            let originalLength = pokemon.all().length

            pokemon.addCustom("Digimon")
            expect(pokemon.all()).to.include("Digimon")
            expect(pokemon.all()).to.have.lengthOf(originalLength + 1)
        })

        it("should return a new list with the new name", () => {
            let originalLength = pokemon.all().length
            let newList = pokemon.addCustom("Coolio")

            expect(newList).to.have.lengthOf(originalLength + 1)
        })

        it("should throw an error if the name is not a String", () => {
            let fn = () => pokemon.addCustom(123)
            expect(fn).to.throw(/name must be a String/)
        })
    })
})

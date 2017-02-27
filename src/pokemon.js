import uniqueRandom from "unique-random-array"
import clone from "clone"

const raw = require("./data/pokemon.json")

let data = clone(raw)
const getRandomItem = uniqueRandom(data)

/**
 * Return a list of all names
 * @return {Array} Array of all the names
 */
export const all = () => data

/**
 * Get a random Pokémon name or multiple if 'count' is passed
 * @param  {Number} [count] The amount of names to generate
 * @throws Will throw an error if count is not a Number
 * @return {String|Array}   A single name or Array of names if 'count' is passed
 */
export const random = count => {
    if (count === undefined) {
        return getRandomItem()
    } else {
        if (typeof count !== "number") {
            throw new Error("count must be a Number")
        }

        let randomItems = []

        for (let i = 0; i < count; i++) {
            randomItems.push(getRandomItem())
        }

        return randomItems
    }
}

/**
 * Add a custom name to the name list
 * @param  {String} name The name to add to the list
 * @throws Will throw an error if name is not a String
 * @return {Array} The original list with the custom name added
 */
export const addCustom = name => {
    if (typeof name !== "string") {
        throw new Error("name must be a String")
    }

    data.push(name)

    return data
}

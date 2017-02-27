/* eslint no-extend-native: off */

/**
 * Check if an Array contains only Strings
 * @param  {Array}  array  The Array to check
 * @throws {Error}         Throws an Error if argument is not an Array
 * @return {Boolean}       If the Array contains only Strings
 */
export const isAllStrings = array => {
    if (!Array.isArray(array)) {
        throw new Error("Argument must be an Array")
    }

    for (let item of array) {
        if (typeof item !== "string") {
            return false
        }
    }

    return true
}

/**
 * Checks an Array with the isAllStrings() function and throws an error if it contains non String elements
 * Mostly used internally for throwing errors
 * @param  {Array} array The Array to check
 */
export const checkArrayForStrings = array => {
    if (!isAllStrings(array)) {
        throw new Error("Array contains non String elements")
    }
}

/**
 * Checks if all Strings in an Array are lowercase
 * @param  {Array}  array  The Array to check
 * @throws                 Throws an Error if the Array contains non String elements
 * @return {Boolean}       If the Array is all lowercase
 */
export const isLowerCase = array => {
    checkArrayForStrings(array)

    for (let item of array) {
        if (item !== item.toLowerCase()) {
            return false
        }
    }

    return true
}

/**
 * Checks if all Strings in an Array are uppercase
 * @param  {Array}  array  The Array to check
 * @throws                 Throws an Error if the Array contains non String elements
 * @return {Boolean}       If the Array is all uppercase
 */
export const isUpperCase = array => {
    checkArrayForStrings(array)

    for (let item of array) {
        if (item !== item.toUpperCase()) {
            return false
        }
    }

    return true
}

/**
 * Returns a new Array with all Strings converted to lowercase
 * @param  {Array} array The Array to convert
 * @throws               Throws an Error if the Array contains non String elements
 * @return {Array}       The new lowercase Array
 */
export const toLowerCase = array => {
    checkArrayForStrings(array)

    return array.map(item => item.toLowerCase())
}

/**
 * Returns a new Array with all Strings converted to uppercase
 * @param  {Array} array The Array to convert
 * @throws               Throws an Error if the Array contains non String elements
 * @return {Array}       The new uppercase Array
 */
export const toUpperCase = array => {
    checkArrayForStrings(array)

    return array.map(item => item.toUpperCase())
}

/**
 * Extends the Array prototype with new functions
 */
export const extend = () => {
    Object.defineProperty(Array.prototype, "isAllStrings", {
        value: function() {
            return isAllStrings(this)
        }
    })

    Object.defineProperty(Array.prototype, "isLowerCase", {
        value: function() {
            return isLowerCase(this)
        }
    })

    Object.defineProperty(Array.prototype, "isUpperCase", {
        value: function() {
            return isUpperCase(this)
        }
    })

    Object.defineProperty(Array.prototype, "toLowerCase", {
        value: function() {
            return toLowerCase(this)
        }
    })

    Object.defineProperty(Array.prototype, "toUpperCase", {
        value: function() {
            return toUpperCase(this)
        }
    })
}

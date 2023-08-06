/**
 * Deeply compares two values for equality.
 * @param {*} valueOne - The first value to compare.
 * @param {*} valueTwo - The second value to compare.
 * @returns {boolean} - `true` if the values are deeply equal, `false` otherwise.
 * @example
 * const obj1 = { a: 1, b: [2, 3] };
 * const obj2 = { a: 1, b: [2, 3] };
 * const result = deepEquals(obj1, obj2); // true
 */
export var deepEquals = function (valueOne, valueTwo) {
    // Check if the types are different
    if (typeof valueOne !== typeof valueTwo) {
        return false;
    }
    // Handle non-object and null values
    if (typeof valueOne !== "object" || valueOne === null || valueTwo === null) {
        // Check if both values are strings
        if (typeof valueOne === "string" && typeof valueTwo === "string") {
            return valueOne === valueTwo;
        }
        // Check if both values are the same or both are NaN
        return valueOne === valueTwo || (isNaN(valueOne) && isNaN(valueTwo));
    }
    // Handle Arrays
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        // Check if arrays have different lengths
        if (valueOne.length !== valueTwo.length) {
            return false;
        }
        // Check if every element in the arrays is deeply equal
        return valueOne.every(function (item, index) { return deepEquals(item, valueTwo[index]); });
    }
    // Handle Objects
    if (typeof valueOne === "object" && typeof valueTwo === "object") {
        var valueOneKeys = Object.keys(valueOne);
        var valueTwoKeys = Object.keys(valueTwo);
        // Check if objects have different numbers of keys
        if (valueOneKeys.length !== valueTwoKeys.length) {
            return false;
        }
        // Check values of each key recursively
        return valueOneKeys.every(function (key) { return deepEquals(valueOne[key], valueTwo[key]); });
    }
    // If none of the above conditions are met, the values are not equal
    return false;
};

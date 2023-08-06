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
export declare const deepEquals: (valueOne: any, valueTwo: any) => boolean;

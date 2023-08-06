/**
 * Returns true if the value is null or undefined
 *
 * @since v0.0.1
 * @category Value
 * @param {*} value - The value to check
 * @returns {boolean}
 * @example
 * isNill(null)       //=> true
 * isNill(undefined)  //=> true
 * isNill('')         //=> false
 * isNill([])         //=> false
 * isNill({})         //=> false
 */
export var isNil = function (value) { return value === undefined || value === null; };

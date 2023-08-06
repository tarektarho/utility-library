const { deepEquals } = require("../../../dist/lib/es5")

describe("deepEquals", () => {
  it("should return true for equal primitive values", () => {
    expect(deepEquals(5, 5)).toBe(true)
    expect(deepEquals("hello", "hello")).toBe(true)
    expect(deepEquals(null, null)).toBe(true)
  })

  it("should return false for different primitive values", () => {
    expect(deepEquals(5, 10)).toBe(false)
    expect(deepEquals("hello", "world")).toBe(false)
    expect(deepEquals(null, undefined)).toBe(false)
  })

  it("should return true for equal arrays", () => {
    const arr1 = [1, 2, [3, 4]]
    const arr2 = [1, 2, [3, 4]]
    expect(deepEquals(arr1, arr2)).toBe(true)
  })

  it("should return false for different arrays", () => {
    const arr1 = [1, 2, [3, 4]]
    const arr2 = [1, 2, [3, 5]]
    expect(deepEquals(arr1, arr2)).toBe(false)
  })

  it("should return true for equal objects", () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 2 } }
    expect(deepEquals(obj1, obj2)).toBe(true)
  })

  it("should return false for different objects", () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 3 } }
    expect(deepEquals(obj1, obj2)).toBe(false)
  })

  it("should handle NaN values correctly", () => {
    expect(deepEquals(NaN, NaN)).toBe(true)
    expect(deepEquals(NaN, 5)).toBe(false)
  })
})

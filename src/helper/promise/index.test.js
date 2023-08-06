const { PromiseUtility } = require("../../../dist/lib/es5")

describe("PromiseUtility", () => {
  describe("promiseAll", () => {
    const promiseHelper = new PromiseUtility()
    it("should resolve an array of resolved promise values", () => {
      const promise1 = Promise.resolve(1)
      const promise2 = Promise.resolve(2)
      const promise3 = Promise.resolve(3)

      const promises = [promise1, promise2, promise3]

      const result = promiseHelper.promiseAll(promises)

      result.then((res) => {
        expect(res).toEqual([1, 2, 3])
      })
    })

    it("should handle an empty array of promises", () => {
      const promises = []

      const result = promiseHelper.promiseAll(promises)
      result.then((res) => {
        expect(res).toEqual([])
      })
    })

    it("Should awlays reject an array with a mix of resolved and rejected promises", () => {
      const promise1 = Promise.resolve("resolved")
      const promise2 = Promise.reject("rejected")

      const promises = [promise1, promise2]

      try {
        promiseHelper.promiseAll(promises).catch((error) => {
          // If you want to assert the error, you can do it here
          expect(error).toEqual("rejected")
        })
      } catch (error) {
        console.log(error)
      }
    })
  })
})

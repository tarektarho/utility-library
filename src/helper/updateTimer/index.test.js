const { updateTimer } = require("../../../dist/lib/es5")
describe("updateTimer", () => {
  it("should update the timer based on the target date and timerInfo", () => {
    let today = new Date()
    today.setHours(today.getHours() + 2)
    const isoDate = today.toISOString()
    const timerInfo = { hours: 2, minutes: 30, seconds: 30 }

    const updatedTime = updateTimer(isoDate, timerInfo)

    expect(updatedTime).toEqual({ hours: 4, minutes: 30, seconds: 30 })
  })
})

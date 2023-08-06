/**
 * Updates a timer based on the time remaining until a target date.
 *
 * @param {string} isoDate - The target date in ISO format (e.g., "2023-10-05T14:48:00.000Z").
 * @param {TimerInfo} timerInfo - An object containing hours, minutes, and seconds to add to the timer.
 * @returns {TimerInfo} - An updated timer object.
 *
 * @example
 * const isoDate = "2023-10-05T14:48:00.000Z";
 * const timerInfo = { hours: 0, minutes: 0, seconds: 0 };
 * const updatedTime = updateTimer(isoDate, timerInfo);
 * console.log(updatedTime); // Example output: { hours: 5, minutes: 29, seconds: 30 }
 */
interface TimerInfo {
  hours: number
  minutes: number
  seconds: number
}

export const updateTimer = (isoDate: string, timerInfo: TimerInfo): TimerInfo => {
  // Convert ISO date strings to Date objects
  const targetDate = new Date(isoDate)
  const currentDate = new Date()

  // Calculate the time difference in milliseconds
  const timeDifference = targetDate.getTime() - currentDate.getTime()

  // Calculate the total seconds remaining
  const totalSeconds = Math.floor(timeDifference / 1000)

  // Calculate hours, minutes, and seconds from total seconds
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  // Calculate the updated time by adding timerInfo values
  const updatedTime: TimerInfo = {
    hours: hours + timerInfo.hours,
    minutes: minutes + timerInfo.minutes,
    seconds: seconds + timerInfo.seconds,
  }

  return updatedTime
}

// Example usage
// const isoDate = "2023-10-05T14:48:00.000Z" (05 Augst 2023 16:48 UTC)
// const timerInfo: TimerInfo = { hours: 0, minutes: 0, seconds: 0 }
// const updatedTime = updateTimer(isoDate, timerInfo)
// console.log(updatedTime) // Example output: { hours: 5, minutes: 29, seconds: 30 }

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
    hours: number;
    minutes: number;
    seconds: number;
}
export declare const updateTimer: (isoDate: string, timerInfo: TimerInfo) => TimerInfo;
export {};

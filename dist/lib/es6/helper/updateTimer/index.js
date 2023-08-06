export var updateTimer = function (isoDate, timerInfo) {
    // Convert ISO date strings to Date objects
    var targetDate = new Date(isoDate);
    var currentDate = new Date();
    // Calculate the time difference in milliseconds
    var timeDifference = targetDate.getTime() - currentDate.getTime();
    // Calculate the total seconds remaining
    var totalSeconds = Math.floor(timeDifference / 1000);
    // Calculate hours, minutes, and seconds from total seconds
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;
    // Calculate the updated time by adding timerInfo values
    var updatedTime = {
        hours: hours + timerInfo.hours,
        minutes: minutes + timerInfo.minutes,
        seconds: seconds + timerInfo.seconds,
    };
    return updatedTime;
};
// Example usage
// const isoDate = "2023-10-05T14:48:00.000Z" (05 Augst 2023 16:48 UTC)
// const timerInfo: TimerInfo = { hours: 0, minutes: 0, seconds: 0 }
// const updatedTime = updateTimer(isoDate, timerInfo)
// console.log(updatedTime) // Example output: { hours: 5, minutes: 29, seconds: 30 }

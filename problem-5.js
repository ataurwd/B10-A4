function  waitingTime(waitingTimes  , serialNumber) {

    let totalWatiingTime = 0;
    for (const arr of waitingTimes) {
        totalWatiingTime += arr;
    }
    let arrayLength = waitingTimes.length;
    
    let avarageTime = parseInt(totalWatiingTime / arrayLength);
    let isratInterviewTime = avarageTime * ((serialNumber - 1) - arrayLength);
    return isratInterviewTime;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));

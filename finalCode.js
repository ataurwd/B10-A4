function calculateTax(income, expenses){
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"
    }
    let Totalincome = income - expenses;
    let tax = Totalincome * 0.2
    return tax; 
}


function sendNotification(email){
    if(!email.includes('@')){
        return 'Invalid Email'
    }
    const findWord = email.split('@')
    const userName = findWord[0]
    const companyName = findWord[1]
    let result = userName + ' ' + 'sent you an email from' + ' ' + companyName;
    return result;
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i])){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj === null){
        return 'Invalid Input'
    }
    let isFarmarPoint = obj.isFFamily ? 20: 0;
    let totalPoint = 0;
    if(obj.testScore <= 50 && obj.schoolGrade <= 30){
            totalPoint = obj.testScore + obj.schoolGrade + isFarmarPoint ;
    }
    if(totalPoint >= 80){
        return true;
    }
    return false;
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    let totalWaitingTime = 0;
    for (const arr of waitingTimes) {
        totalWaitingTime += arr;
    }
    let arrayLength = waitingTimes.length;
    
    let avarageTime = parseInt(totalWaitingTime / arrayLength);
    let isratInterviewTime = avarageTime * ((serialNumber - 1) - arrayLength);
    return isratInterviewTime;
}
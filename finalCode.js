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
    let userName = '';
    let companyName = ''
    for(let i = 0; i < email.length; i++){
        if(email[i] === '@'){
            userName = email.slice(0, i)
            companyName = email.slice(i + 1)
            break;
        }
    }
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
    let isFarmar = true
    if(obj.isFFamily){
        isFarmar = 20;
    }
    else{
        0
    }
    let totalPoint = obj.testScore + obj.schoolGrade + isFarmar ;
    if(totalPoint >= 80){
        return true;
    }
    return false;
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)|| typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    let totalWatiingTime = 0;
    for (const arr of waitingTimes) {
        totalWatiingTime += arr;
    }
    let arrayLength = waitingTimes.length;
    
    let avarageTime = parseInt(totalWatiingTime / arrayLength);
    let isratInterviewTime = avarageTime * ((serialNumber - 1) - arrayLength);
    return isratInterviewTime;
}
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

const input = 'farhan34@yahoo.com';
const resutl = sendNotification(input);
console.log(resutl);





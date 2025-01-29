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



console.log(sendNotification('rrr.rr@gmail.com'));

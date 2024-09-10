function checkDigitsInName(name) {
    for(let i = 0; i < name.length; i++){
        if(name.match(/\d+/g)){
            return true;
        }
    }
    return false;
}

console.log(checkDigitsInName('ataur1'));



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


const input = { name: "Rajib", testScore: 35,  schoolGrade: 25, isFFamily : true  }

console.log(calculateFinalScore(input));

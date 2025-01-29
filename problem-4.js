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

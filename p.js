function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj.testScore >= 50 || obj.schoolGrade >= 30){
     return "Invalid Input";
    }
    let totalMarks = obj.testScore + obj.schoolGrade ;
    if(obj.isFFamily){
        totalMarks += 20;
    }
    if(totalMarks >=70 ){
        return true;
    }
    return false
 }
 
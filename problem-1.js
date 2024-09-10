//Problem 1 Solution
function calculateTax(income, expenses){
    if(income < -1 && expenses < -1 || expenses > income){
        return "Invalid Input"
    }
    let Totalincome = income - expenses;
    let tax = Totalincome * 0.2
    return tax; 
}

// console.log(calculateTax(5000, 1500));





//Problem 1 Solution
function calculateTax(income, expenses){
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"
    }
    let Totalincome = income - expenses;
    let tax = Totalincome * 0.2
    return tax; 
}

console.log(calculateTax(7000, 7000));





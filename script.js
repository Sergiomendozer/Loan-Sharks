//
// function cal_loan(){

// }
var Principle = parseFloat(5000);
var months = parseFloat(12);
var rate = parseFloat(6.0) / 100;
var monthly_rate = rate / 12;
// console.log(monthly_rate);
//
var numerator = Principle * monthly_rate * Math.pow(1 + monthly_rate, months);
var denominator = Math.pow(1 + monthly_rate, months) - 1;
var p = numerator / denominator;
// var p = 153.195;
console.log(p);
p = Math.round(p * 100) / 100;
console.log(p);
payment = p.toFixed(2); // 3.14 returns a string

var total_principle = Principle;
var total_loan = String(months * parseFloat(payment));
var total_interest = String(parseFloat(total_loan) - Principle);
total_interest = Math.round(total_interest * 100) / 100;
total_interest = total_interest.toFixed(2); // 3.14 returns a string

console.log("Monthly Payment: $" + payment);
console.log("Total Principle: $" + Principle);
console.log("Total Interest: $" + total_interest);
console.log("Total Loan: $" + total_loan);

//
// function cal_loan(){

// }
var amount = parseFloat(5000);
var months = parseFloat(12);
var rate = parseFloat(6.0) / 100;
var monthly_rate = rate / 12;
// console.log(monthly_rate);
//
var numerator = amount * monthly_rate * Math.pow(1 + monthly_rate, months);
var denominator = Math.pow(1 + monthly_rate, months) - 1;
var p = numerator / denominator;
// var p = 153.195;
console.log(p);
p = Math.round(p * 100) / 100;
console.log(p);
payment = p.toFixed(2); // 3.14 returns a string

var total_principle = amount;
var total_loan = String(months * parseFloat(payment));
var total_interest = String(parseFloat(total_loan) - amount);

console.log("monthly payment: " + payment);
console.log("Total interest to pay: ");
console.log("total Loan: " + total_loan);
console.log(months);

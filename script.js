//
// function cal_loan(){

// }
var amount = parseFloat(100);
var months = parseFloat(2);
var rate = parseFloat(3.1) / 100;
var monthly_rate = rate / 12;
// console.log(monthly_rate);
//
var numerator = amount * monthly_rate * Math.pow(1 + monthly_rate, months);
var denominator = Math.pow(1 + monthly_rate, months) - 1;
var p = String(numerator / denominator);
console.log(p);
console.log(p.indexOf("."));
// var payment = console.log(amount, rate);
// console.log(rate);

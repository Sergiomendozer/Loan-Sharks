//
// function cal_loan(){

// }
// var principle = parseFloat(15000);
// var months = parseFloat(60);
// var rate = parseFloat(3.5) / 100;
// var monthly_rate = rate / 12;
//'
var principle = parseFloat(5000);
var months = parseFloat(12);
var rate = parseFloat(6.0) / 100;
var monthly_rate = rate / 12;
// console.log(monthly_rate);
//
var numerator = principle * monthly_rate * Math.pow(1 + monthly_rate, months);
var denominator = Math.pow(1 + monthly_rate, months) - 1;
var p = numerator / denominator;
// var p = 153.195;
//! console.log(p);
p = Math.round(p * 100) / 100;
//! console.log(p);
payment = p.toFixed(2); // 3.14 returns a string

var total_principle = principle;
var total_loan = String(months * parseFloat(payment));
var total_interest = String(parseFloat(total_loan) - principle);
total_interest = Math.round(total_interest * 100) / 100;
total_interest = total_interest.toFixed(2); // 3.14 returns a string

console.log("Monthly Payment: $" + payment);
console.log("Total principle: $" + principle);
console.log("Total Interest: $" + total_interest);
console.log("Total Loan: $" + total_loan);
var table = [
  ["Month", "Payment", "Interest", "Total Interest", "Balance owed"],
];
var column = [];
for (var n = 1; n < 5; n++) {
  column[n] = "empty";
}
column;
console.log(column[1]);
console.log(column[2]);
console.log(column[3]);
console.log(column[4]);
for (var i = 1; i < 5; i++) {
  column[i] = Object.assign([String(i)], i);
}

console.log(column[1]);
console.log(column[2]);
console.log(column[3]);
console.log(column[4]);

// console.table(table);

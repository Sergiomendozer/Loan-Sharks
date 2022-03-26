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

var percentage_principle = (principle / total_loan) * 100;
var percentage_interest = total_interest / total_loan;
percentage_principle = percentage_principle.toFixed(2) + "%";

console.log("Monthly Payment: $" + payment);
console.log("Total principle: $" + principle);
console.log("Total Interest: $" + total_interest);
console.log("Total Loan: $" + total_loan);
console.log(" "); // empty to separate
console.log(percentage_principle);
console.log(percentage_interest);
var loan_info_table = [
  [
    "Month",
    "Payment",
    "Principle",
    "Current Interest",
    "Interest paid",
    "Balance owed",
  ],
];
var column = [];
for (var n = 1; n < months + 1; n++) {
  column[n] = "empty";
}
column;
for (var i = 1; i < months + 1; i++) {
  column[i] = Object.assign([String(i)], i);
}

//! console.log(column[1]); for testing
//! console.log(column[2]);
//! console.log(column[3]);
//! console.log(column[4]);
//! console.log(column[5]);
//! console.log(column[6]);
//! console.log(column[11]);
//! console.log(column[12]); for testing
// for loop if for appending/pushing float/loan info elements
// var r_balance = principle;

for (var a = 1; a < months + 1; a++) {
  loan_info_table.push(column[a]);
  loan_info_table[a].push("$" + payment);
}

// make for look por principle paid

var r_balance = principle;
for (var b = 1; b < months + 1; b++) {
  r_balance = principle - b * payment; //! math round to b*payment
  r_balance = Math.round(r_balance * 100) / 100;
  loan_info_table[b].push("$" + r_balance);
}

// var r_balance = principle;
// r_balance = principle - payment;
// console.log(z);
// for (
//   var r_balance = principle;
//   r_balance > -1;
//   r_balance = principle - payment
// ) {
//   loan_info_table.push(r_balance);
// }

//! console.log(monthly_rate);
// var r_balance = principle;
// // var c_interest = monthly_rate * r_balance;
// r_balance = principle - payment;

// // console.log(c_interest);
// console.log(r_balance);

console.table(loan_info_table);

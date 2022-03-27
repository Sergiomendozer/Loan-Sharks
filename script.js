//? Other tests
//? test 2
// var principle = parseFloat(15000);
// var months = parseFloat(60);
// var rate = parseFloat(3.5) / 100;
// var monthly_rate = rate / 12;
//?

var principle = parseFloat(5000);
var months = parseFloat(12);
var rate = parseFloat(6.0) / 100;
var monthly_rate = rate / 12;

//! above it the inputted values
var numerator = principle * monthly_rate * Math.pow(1 + monthly_rate, months);
var denominator = Math.pow(1 + monthly_rate, months) - 1;
var payment = numerator / denominator;

payment_rounded = Math.round(payment * 100) / 100;
var payment_rounded = payment_rounded.toFixed(2);

var total_principle = principle;
var total_loan = months * parseFloat(payment);
var total_interest = parseFloat(total_loan) - principle;
// total_interest = Math.round(total_interest * 100) / 100;
// total_interest = total_interest.toFixed(2);

var percentage_principle = (principle / total_loan) * 100;
var percentage_interest = (total_interest / total_loan) * 100;

// function makes sure number is not rounded up
function toFixed(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}
total_loan = toFixed(total_loan, 2);
total_interest = toFixed(total_interest, 2);
// total_loan = total_loan.toFixed(2);
percentage_principle = percentage_principle.toFixed(2) + "%";
percentage_interest = percentage_interest.toFixed(2) + "%";

console.log("Monthly Payment: $" + payment_rounded);
console.log("Total Principle: $" + principle);
console.log("Total Interest: $" + total_interest);
console.log("Total Loan: $" + total_loan);
console.log(" "); // empty to separate
console.log("Principle Percentage: " + percentage_principle);
console.log("Interest Percentage: " + percentage_interest);
var loan_info_table = [
  [
    "Month",
    "Payment",
    "Principle",
    "Interest amount",
    "Interest paid",
    "Remaining Balance",
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

for (var a = 1; a < months + 1; a++) {
  loan_info_table.push(column[a]);
  loan_info_table[a].push("$" + payment_rounded);
}

// math.rounds after all calculations
// b.push together
var r_balance = principle;
// console.log(r_balance);
var interest_paid = 0;
for (var b = 1; b < months + 1; b++) {
  var interest_amount = monthly_rate * r_balance;
  var c_principle = payment - interest_amount;
  interest_paid = interest_paid + interest_amount;
  r_balance = r_balance - c_principle;

  // rounds up numbers before pushing to table
  c_principle = Math.round(c_principle * 100) / 100;
  interest_amount = Math.round(interest_amount * 100) / 100;
  interest_paid = Math.round(interest_paid * 100) / 100;
  r_balance = Math.round(r_balance * 100) / 100;

  // pushing values to table
  loan_info_table[b].push("$" + c_principle);
  loan_info_table[b].push("$" + interest_amount);
  loan_info_table[b].push("$" + interest_paid);
  loan_info_table[b].push("$" + r_balance);
}

console.table(loan_info_table);
//! make sure at the top all rounding is together

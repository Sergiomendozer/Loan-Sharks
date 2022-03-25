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
var p = numerator / denominator;
// var p = 153.195;
console.log(p);
p = Math.round(p * 100) / 100;
console.log(p);
payment = p.toFixed(2); // 3.14 returns a string
console.log(payment);

// var decimal = p.indexOf(".");
// console.log(decimal);

// var n_round = p[decimal + 3];
// console.log(n_round);
// if (n_round > 4) {
//   console.log("called");
//   console.log(p[decimal + 2]);
//   p[decimal + 2] = 0;
//   console.log(p[decimal + 2]);

//   //   p[decimal + 1] = parseFloat(p[decimal + 1]) + 1;
// }
console.log(p);

// var payment = console.log(amount, rate);
// console.log(rate);

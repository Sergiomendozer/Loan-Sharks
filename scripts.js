var principle = null;
var months = null;
var rate = null;

function test() {
  document.getElementById("principle").value = 5000;
  document.getElementById("months").value = 60;
  document.getElementById("rate").value = 6;
}

function calculations() {
  console.log("calculations");
  principle = parseFloat(document.getElementById("principle").value);
  months = parseFloat(document.getElementById("months").value);
  rate = parseFloat(document.getElementById("rate").value);
  if (
    isNaN(principle) == false ||
    isNaN(months) == false ||
    isNaN(rate) == false
  ) {
    console.log("P: " + principle); //!for testing
    console.log("#: " + months); //!for testing
    console.log("rate: " + rate); //!for testing
    /////////////////////////////////////
    // payment calculations
    var monthly_rate = rate / 12;
    var numerator =
      principle * monthly_rate * Math.pow(1 + monthly_rate, months);
    var denominator = Math.pow(1 + monthly_rate, months) - 1;
    var payment = numerator / denominator;
    //payment rounded calculation
    payment_rounded = Math.round(payment * 100) / 100;
    var payment_rounded = "$" + payment_rounded.toFixed(2);

    var total_principle = principle;
    var total_loan = months * parseFloat(payment);
    var total_interest = parseFloat(total_loan) - principle;

    //percentage calculations
    var percentage_principle = (principle / total_loan) * 100;
    var percentage_interest = (total_interest / total_loan) * 100;

    // rounded up numbers
    total_loan = "$" + Math.round(total_loan * 100) / 100;
    total_interest = "$" + Math.round(total_interest * 100) / 100;
    percentage_principle = percentage_principle.toFixed(2) + "%";
    percentage_interest = percentage_interest.toFixed(2) + "%";
    principle = "$" + principle;

    document.getElementById("monthly_payments").innerHTML =
      "Monthly Payment:" + payment_rounded;
    document.getElementById("total_principle").innerHTML =
      "Total Principle:" + principle;
    document.getElementById("total_interest").innerHTML =
      "Total Interest:" + total_interest;
    document.getElementById("total_loan").innerHTML =
      "Total Loan:" + total_loan;

    console.log("Monthly Payment:" + payment_rounded); //!for testing
    console.log("Total Principle:" + principle); //!for testing
    console.log("Total Interest:" + total_interest); //!for testing
    console.log("Total Loan:" + total_loan); //!for testing
    console.log(" "); // empty to separate
    console.log("Principle Percentage: " + percentage_principle); //!for testing
    console.log("Interest Percentage: " + percentage_interest); //!for testing
  }
}

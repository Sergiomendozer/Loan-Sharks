var principle = null;
var months = null;
var rate = null;
var data = null;
// var a = 1;
// var b = 3;
// var percentage_principle = null;
// var percentage_interest = null;

//  function is used to create a pie chart of percentage of principle and Interest
google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart);
function drawChart(a, b) {
  data = google.visualization.arrayToDataTable([
    ["Type", "amount"],
    ["Principle", a],
    ["Interest", b],
  ]);

  var options = {
    title: "Principle & Interest percentages",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("pie_chart")
  );

  chart.draw(data, options);
}

///

function test() {
  document.getElementById("principle").value = 5000;
  document.getElementById("months").value = 12;
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
    rate = rate / 100; // converts percentage to decimal
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
    var percentage_principle = principle / total_loan;
    var percentage_interest = total_interest / total_loan;

    // console.log(data);
    // var percentage_principle = (principle / total_loan) * 100;
    // var percentage_interest = (total_interest / total_loan) * 100;

    // rounded up numbers
    total_loan = "$" + Math.round(total_loan * 100) / 100;
    total_interest = "$" + Math.round(total_interest * 100) / 100;
    // percentage_principle = percentage_principle.toFixed(2) + "%";
    // percentage_interest = percentage_interest.toFixed(2) + "%";

    document.getElementById("monthly_payments").innerHTML =
      "Monthly Payment: " + payment_rounded;
    document.getElementById("total_principle").innerHTML =
      "Total Principle: $" + principle;
    document.getElementById("total_interest").innerHTML =
      "Total Interest: " + total_interest;
    document.getElementById("total_loan").innerHTML =
      "Total Loan: " + total_loan;
    // prints out pie chart
    google.charts.setOnLoadCallback(
      drawChart(percentage_principle, percentage_interest)
    ); // prints out pie chart

    console.log("Monthly Payment:" + payment_rounded); //!for testing
    console.log("Total Principle:" + principle); //!for testing
    console.log("Total Interest:" + total_interest); //!for testing
    console.log("Total Loan:" + total_loan); //!for testing
    console.log(" "); // empty to separate //!for testing
    console.log("Principle Percentage: " + percentage_principle); //!for testing
    console.log("Interest Percentage: " + percentage_interest); //!for testing

    //append table elements
    // for loop appends i into months chart
    for (i = 1; i < months + 1; i++) {
      const table_tag_M = document.createElement("tr");
      table_tag_M.setAttribute("Id", "Month" + i);
      const empty_element_M = document.createTextNode("");
      table_tag_M.appendChild(empty_element_M);
      const doc_M = document.getElementById("Month row");
      doc_M.appendChild(table_tag_M);

      const Tag_row_M = document.createElement("tr");
      const Month_i = document.createTextNode(i);
      Tag_row_M.appendChild(Month_i);
      const id_M = document.getElementById("Month" + i);
      id_M.appendChild(Tag_row_M);

      // Payments table append html
      const table_tag_payment = document.createElement("tr");
      table_tag_payment.setAttribute("Id", "Payment" + i);
      const empty_element_payment = document.createTextNode("");
      table_tag_payment.appendChild(empty_element_payment);
      const doc_payment = document.getElementById("Payment row");
      doc_payment.appendChild(table_tag_payment);

      const Tag_row_payment = document.createElement("tr");
      const Payment_i = document.createTextNode(payment_rounded);
      Tag_row_payment.appendChild(Payment_i);
      const id_payment = document.getElementById("Payment" + i);
      id_payment.appendChild(Tag_row_payment);
    }
    console.log("second for loop");
    var remaining_balance = principle;
    // console.log(remaining_balance);
    var interest_paid = 0;
    for (var c = 1; c < months + 1; c++) {
      console.log(c);
      console.log(remaining_balance);
      //Calculations
      var interest_amount = monthly_rate * remaining_balance;
      console.log(remaining_balance);
      console.log(interest_amount);
      console.log(payment);
      var c_principle = payment - interest_amount;

      console.log(c_principle);
      interest_paid = interest_paid + interest_amount;
      remaining_balance = remaining_balance - c_principle;

      // rounds up numbers before pushing to table
      c_principle = Math.round(c_principle * 100) / 100;
      interest_amount = Math.round(interest_amount * 100) / 100;
      interest_paid_rounded = Math.round(interest_paid * 100) / 100;
      var remaining_balance_rounded = Math.round(remaining_balance * 100) / 100;

      //Principle.
      const table_tag_principle = document.createElement("tr");
      table_tag_principle.setAttribute("Id", "Principle" + c);
      const empty_element_principle = document.createTextNode("");
      table_tag_principle.appendChild(empty_element_principle);
      const doc_principle = document.getElementById("Principle row");
      doc_principle.appendChild(table_tag_principle);

      const Tag_row_principle = document.createElement("tr");
      const Principle_i = document.createTextNode("$" + c_principle);
      Tag_row_principle.appendChild(Principle_i);
      const id_principle = document.getElementById("Principle" + c);
      id_principle.appendChild(Tag_row_principle);

      // pushing values to table
      //   loan_info_table[b].push("$" + c_principle);
      //   loan_info_table[b].push("$" + interest_amount);
      //   loan_info_table[b].push("$" + interest_paid_rounded);
      //   loan_info_table[b].push("$" + remaining_balance_rounded);
    }
  }
}

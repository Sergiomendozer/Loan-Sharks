var principle = null;
var months = null;
var rate = null;

//  function is used to create a pie chart of percentage/ratio of principle and Interest
google.charts.load("current", { packages: ["corechart"] });
function drawChart(a, b) {
  data = google.visualization.arrayToDataTable([
    ["Type", "amount"],
    ["Principle", a],
    ["Interest", b],
  ]);

  let options = {
    title: "Principle & Interest percentages",
    backgroundColor: { fill: "#e2e2e2" },
  };

  let chart = new google.visualization.PieChart(
    document.getElementById("pie_chart")
  );

  chart.draw(data, options);
}

// test function was used to testing values input quickly
function test() {
  document.getElementById("principle").value = 5000;
  document.getElementById("months").value = 12;
  document.getElementById("rate").value = 6;
}
function test2() {
  document.getElementById("principle").value = 50000;
  document.getElementById("months").value = 7;
  document.getElementById("rate").value = 19.6;
}
// function takes inputs and calculates important loan information that is displayed
function calculations() {
  // clear/delete table that displays loan information from previous calculation
  clear_table();
  // below grabs the three inputs user gave
  principle = parseFloat(document.getElementById("principle").value);
  months = parseFloat(document.getElementById("months").value);
  rate = parseFloat(document.getElementById("rate").value);
  //NaN is short for "Not-a-Number", and if no input is entered
  //isNaN() is a function that determines whether a value is NaN or not
  if (
    isNaN(principle) == false &&
    isNaN(months) == false &&
    isNaN(rate) == false
  ) {
    console.log("P: " + principle); //!for testing
    console.log("#: " + months); //!for testing
    console.log("rate: " + rate); //!for testing

    // payment calculations
    rate = rate / 100; // converts percentage to decimal
    const monthly_rate = rate / 12;
    const numerator =
      principle * monthly_rate * Math.pow(1 + monthly_rate, months);
    const denominator = Math.pow(1 + monthly_rate, months) - 1;
    const payment = numerator / denominator;
    //payment rounded calculation
    let payment_rounded = Math.round(payment * 100) / 100;
    payment_rounded = payment_rounded.toFixed(2);
    let total_principle = principle;
    let total_loan = months * parseFloat(payment);
    let total_interest = parseFloat(total_loan) - principle;

    //percentage/ratio calculations
    const percentage_principle = principle / total_loan;
    const percentage_interest = total_interest / total_loan;

    // rounded up numbers
    total_loan = "$" + Math.round(total_loan * 100) / 100;
    total_interest = "$" + Math.round(total_interest * 100) / 100;

    // displays: Monthly Payment to user
    document.getElementById("monthly_payments").innerHTML =
      "Monthly Payment: $" + payment_rounded;
    // displays: Total Principle to user
    document.getElementById("total_principle").innerHTML =
      "Total Principle: $" + principle;
    // displays: Total Interest to user
    document.getElementById("total_interest").innerHTML =
      "Total Interest: " + total_interest;
    // displays: Total Loan to user
    document.getElementById("total_loan").innerHTML =
      "Total Loan: " + total_loan;

    // Pie chart of percentage/ratio of principle and Interest displayed to user
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

    //displays following elements to user in a table: Month, Payment
    // for loop is used to display column by column elements in the table
    for (i = 1; i < months + 1; i++) {
      // makes a html tag for Months
      const table_tag_M = document.createElement("tr");
      table_tag_M.setAttribute("Id", "Month" + i);
      const empty_element_M = document.createTextNode("");
      table_tag_M.appendChild(empty_element_M);
      const doc_M = document.getElementById("Month row");
      doc_M.appendChild(table_tag_M);

      // displays Month number to user in table
      const Tag_row_M = document.createElement("tr");
      const Month_i = document.createTextNode(i);
      Tag_row_M.appendChild(Month_i);
      const id_M = document.getElementById("Month" + i);
      id_M.appendChild(Tag_row_M);

      // makes a html tag for Payment
      const table_tag_payment = document.createElement("tr");
      table_tag_payment.setAttribute("Id", "Payment" + i);
      const empty_element_payment = document.createTextNode("");
      table_tag_payment.appendChild(empty_element_payment);
      const doc_payment = document.getElementById("Payment row");
      doc_payment.appendChild(table_tag_payment);

      // displays Payment to user in table
      const Tag_row_payment = document.createElement("tr");
      const Payment_i = document.createTextNode("$" + payment_rounded);
      Tag_row_payment.appendChild(Payment_i);
      const id_payment = document.getElementById("Payment" + i);
      id_payment.appendChild(Tag_row_payment);
    }
    let remaining_balance = principle;
    let interest_paid = 0;
    //displays following elements to user in a table: Principle, Interest amount, Interest paid, Remaining Balance
    // for loop is used to display column by column elements in the table
    for (let c = 1; c < months + 1; c++) {
      //Calculations for Principle, Interest amount, Interest paid, Remaining Balance
      let interest_amount = monthly_rate * remaining_balance;
      let c_principle = payment - interest_amount;
      interest_paid = interest_paid + interest_amount;
      remaining_balance = remaining_balance - c_principle;

      // rounds up numbers before pushing to table
      c_principle = Math.round(c_principle * 100) / 100;
      interest_amount = Math.round(interest_amount * 100) / 100;
      interest_paid_rounded = Math.round(interest_paid * 100) / 100;
      let remaining_balance_rounded = Math.round(remaining_balance * 100) / 100;

      // makes a html tag for Principle
      const table_tag_principle = document.createElement("tr");
      table_tag_principle.setAttribute("Id", "Principle" + c);
      const empty_element_principle = document.createTextNode("");
      table_tag_principle.appendChild(empty_element_principle);
      const doc_principle = document.getElementById("Principle row");
      doc_principle.appendChild(table_tag_principle);

      // displays Principle to user in table
      const Tag_row_principle = document.createElement("tr");
      const Principle_i = document.createTextNode("$" + c_principle);
      Tag_row_principle.appendChild(Principle_i);
      const id_principle = document.getElementById("Principle" + c);
      id_principle.appendChild(Tag_row_principle);

      // makes a html tag for Interest amount
      const table_tag_interest_amount = document.createElement("tr");
      table_tag_interest_amount.setAttribute("Id", "Interest amount" + c);
      const empty_element_interest_amount = document.createTextNode("");
      table_tag_interest_amount.appendChild(empty_element_interest_amount);
      const doc_interest_amount = document.getElementById(
        "Interest amount row"
      );
      doc_interest_amount.appendChild(table_tag_interest_amount);

      // displays Interest amount to user in table
      const Tag_row_interest_amount = document.createElement("tr");
      const Interest_amount_i = document.createTextNode("$" + interest_amount);
      Tag_row_interest_amount.appendChild(Interest_amount_i);
      const id_interest_amount = document.getElementById("Interest amount" + c);
      id_interest_amount.appendChild(Tag_row_interest_amount);

      // makes a html tag for Interest paid
      const table_tag_Interest_paid = document.createElement("tr");
      table_tag_Interest_paid.setAttribute("Id", "Interest paid" + c);
      const empty_element_Interest_paid = document.createTextNode("");
      table_tag_Interest_paid.appendChild(empty_element_Interest_paid);
      const doc_Interest_paid = document.getElementById("Interest paid row");
      doc_Interest_paid.appendChild(table_tag_Interest_paid);

      // displays Interest paid to user in table
      const Tag_row_Interest_paid = document.createElement("tr");
      const Interest_paid_i = document.createTextNode(
        "$" + interest_paid_rounded
      );
      Tag_row_Interest_paid.appendChild(Interest_paid_i);
      const id_Interest_paid = document.getElementById("Interest paid" + c);
      id_Interest_paid.appendChild(Tag_row_Interest_paid);

      // makes a html tag for Remaining Balance
      const table_tag_Remaining_Balance = document.createElement("tr");
      table_tag_Remaining_Balance.setAttribute("Id", "Remaining Balance" + c);
      const empty_element_Remaining_Balance = document.createTextNode("");
      table_tag_Remaining_Balance.appendChild(empty_element_Remaining_Balance);
      const doc_Remaining_Balance = document.getElementById(
        "Remaining Balance row"
      );
      doc_Remaining_Balance.appendChild(table_tag_Remaining_Balance);

      // displays Remaining Balance to user in table
      const Tag_row_Remaining_Balance = document.createElement("tr");
      const Remaining_Balance_i = document.createTextNode(
        "$" + remaining_balance_rounded
      );
      Tag_row_Remaining_Balance.appendChild(Remaining_Balance_i);
      const id_Remaining_Balance = document.getElementById(
        "Remaining Balance" + c
      );
      id_Remaining_Balance.appendChild(Tag_row_Remaining_Balance);
    }
  } else {
    alert("not all required information for calculations was entered");
  }
}

// clear/delete table that displays loan information from previous calculation
function clear_table() {
  for (i = 1; i < months + 1; i++) {
    //deletes Month row
    const Tag_row_M = document.createElement("tr");
    const Month_i = document.createTextNode(i);
    Tag_row_M.appendChild(Month_i);
    const id_M = document.getElementById("Month" + i);
    id_M.appendChild(Tag_row_M);
    id_M.remove();

    //deletes Payment row
    const Tag_row_payment = document.createElement("tr");
    const Payment_i = document.createTextNode(i);
    Tag_row_payment.appendChild(Payment_i);
    const id_payment = document.getElementById("Payment" + i);
    id_payment.appendChild(Tag_row_payment);
    id_payment.remove();

    //deletes principle row
    const Tag_row_principle = document.createElement("tr");
    const Principle_i = document.createTextNode(i);
    Tag_row_principle.appendChild(Principle_i);
    const id_principle = document.getElementById("Principle" + i);
    id_principle.appendChild(Tag_row_principle);
    id_principle.remove();

    //deletes Interest amount row
    const Tag_row_interest_amount = document.createElement("tr");
    const Interest_amount_i = document.createTextNode(i);
    Tag_row_interest_amount.appendChild(Interest_amount_i);
    const id_interest_amount = document.getElementById("Interest amount" + i);
    id_interest_amount.appendChild(Tag_row_interest_amount);
    id_interest_amount.remove();

    //deletes Interest paid row
    const Tag_row_Interest_paid = document.createElement("tr");
    const Interest_paid_i = document.createTextNode(i);
    Tag_row_Interest_paid.appendChild(Interest_paid_i);
    const id_Interest_paid = document.getElementById("Interest paid" + i);
    id_Interest_paid.appendChild(Tag_row_Interest_paid);
    id_Interest_paid.remove();

    //deletes Remaining Balance row
    const Tag_row_Remaining_Balance = document.createElement("tr");
    const Remaining_Balance_i = document.createTextNode(i);
    Tag_row_Remaining_Balance.appendChild(Remaining_Balance_i);
    const id_Remaining_Balance = document.getElementById(
      "Remaining Balance" + i
    );
    id_Remaining_Balance.appendChild(Tag_row_Remaining_Balance);
    id_Remaining_Balance.remove();
  }
}

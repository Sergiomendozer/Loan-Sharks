var principle = null;
function get_value(event) {
  principle = document.getElementById("loan_amount").value;
  console.log(principle);
  console.log("loan_amount"); //!for test
}
function start() {
  console.log("start");
  var val = document.getElementById("loan_amount").value;
  console.log(val);
}

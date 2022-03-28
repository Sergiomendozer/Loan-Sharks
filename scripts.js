var principle = null;
var months = null;
var rate = null;
function get_principle(event) {
  principle = parseFloat(document.getElementById("principle").value);
  console.log(principle);
  console.log("principle value"); //!for test
}

function get_months(event) {
  months = parseFloat(document.getElementById("months").value);
  console.log(months);
  console.log("months value"); //!for test
}

function get_rate(event) {
  rate = parseFloat(document.getElementById("rate").value);
  console.log(rate);
  console.log("rate value"); //!for test
}

function calculations() {
  console.log("start");
  rate = parseFloat(document.getElementById("rate").value);
}

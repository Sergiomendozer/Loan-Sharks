var principle = null;
var months = null;
var rate = null;

function calculations() {
  console.log("calculations");
  principle = parseFloat(document.getElementById("principle").value);
  months = parseFloat(document.getElementById("months").value);
  rate = parseFloat(document.getElementById("rate").value);
  if (
    isNaN(principle) == false &&
    isNaN(months) == false &&
    isNaN(rate) == false
  ) {
    console.log("P: " + principle); //!for testing
    console.log("#: " + months); //!for testing
    console.log("rate: " + rate); //!for testing
  }
}

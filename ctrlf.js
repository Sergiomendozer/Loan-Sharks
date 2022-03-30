//Interest amount.
const table_tag_interest_amount = document.createElement("tr");
table_tag_interest_amount.setAttribute("Id", "Interest amount" + i);
const empty_element_interest_amount = document.createTextNode("");
table_tag_interest_amount.appendChild(empty_element_interest_amount);
const doc_interest_amount = document.getElementById("Interest amount row");
doc_interest_amount.appendChild(table_tag_interest_amount);

const Tag_row_interest_amount = document.createElement("tr");
const Interest_amount_i = document.createTextNode("$Interest amount");
Tag_row_interest_amount.appendChild(Interest_amount_i);
const id_interest_amount = document.getElementById("Interest amount" + i);
id_interest_amount.appendChild(Tag_row_interest_amount);

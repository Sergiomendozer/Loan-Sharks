const table_tag_Interest_paid = document.createElement("tr");
table_tag_Interest_paid.setAttribute("Id", "Interest paid" + i);
const empty_element_Interest_paid = document.createTextNode("");
table_tag_Interest_paid.appendChild(empty_element_Interest_paid);
const doc_Interest_paid = document.getElementById("Interest paid row");
doc_Interest_paid.appendChild(table_tag_Interest_paid);

const Tag_row_Interest_paid = document.createElement("tr");
const Interest_paid_i = document.createTextNode("$Interest paid");
Tag_row_Interest_paid.appendChild(Interest_paid_i);
const id_Interest_paid = document.getElementById("Interest paid" + i);
id_Interest_paid.appendChild(Tag_row_Interest_paid);

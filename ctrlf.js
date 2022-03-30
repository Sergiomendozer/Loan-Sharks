const table_tag_Remaining_Balance = document.createElement("tr");
table_tag_Remaining_Balance.setAttribute("Id", "Remaining Balance" + i);
const empty_element_Remaining_Balance = document.createTextNode("");
table_tag_Remaining_Balance.appendChild(empty_element_Remaining_Balance);
const doc_Remaining_Balance = document.getElementById("Remaining Balance row");
doc_Remaining_Balance.appendChild(table_tag_Remaining_Balance);

const Tag_row_Remaining_Balance = document.createElement("tr");
const Remaining_Balance_i = document.createTextNode("$Remaining Balance");
Tag_row_Remaining_Balance.appendChild(Remaining_Balance_i);
const id_Remaining_Balance = document.getElementById("Remaining Balance" + i);
id_Remaining_Balance.appendChild(Tag_row_Remaining_Balance);

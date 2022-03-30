//Principle.
const table_tag_principle = document.createElement("tr");
table_tag_principle.setAttribute("Id", "Principle" + i);
const empty_element_principle = document.createTextNode("");
table_tag_principle.appendChild(empty_element_principle);
const doc_principle = document.getElementById("Principle row");
doc_principle.appendChild(table_tag_principle);

const Tag_row_principle = document.createElement("tr");
const Principle_i = document.createTextNode("$Principle");
Tag_row_principle.appendChild(Principle_i);
const id_principle = document.getElementById("Principle" + i);
id_principle.appendChild(Tag_row_principle);

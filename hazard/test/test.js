const value_container = document.getElementById("time-value-container");
const add_button = document.getElementById("add-button");
const name_box = document.getElementById("name-box");
const number_box = document.getElementById("number-box");

add_data_row = function(parent, ...data) {
  /* Add a row of data to a table */
  // Create a table row (tr) element
	let row = document.createElement("tr");
  
  // For data point to be added...
  for (index = 0; index < data.length; index++) {
    // Create a table data (td) element
    let data_element = document.createElement("td");
    
    // Add a text node containing the data value to the "td" element
  	data_element.appendChild(document.createTextNode(data[index]));
    // Add the element to the data row
    row.appendChild(data_element);
	}
  
  // Add the data row to the parent table
  parent.appendChild(row);
}

// When the user clicks the button
add_button.onclick = function() {
  // Add the current text box values to the table as a row
	add_data_row(value_container, name_box.value, number_box.value);
}
const table_container = document.getElementById("game-winner-container");
const button_container = document.getElementById("play_button");
const guess_container = document.getElementById("guess_box");


add_row = function(parent, ...data){

    let row = document.createElement("tr");

    for(index = 0; index < data.length; index++){
        let element_to_add = document.createElement("td");
        element_to_add.appendChild(document.createTextNode(data[index]))
    }

    parent.appendChild(row);


}

add_button.onclick = () =>{
    add_row(table_container,guess_box.value)
}

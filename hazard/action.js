function createRows() {
    var table = document.getElementById("game_winner");
     //control the number of times the game is played
    trials = document.getElementByID("trials_box").value;
    trials = Integer.parseInt(trials);
    let i = 1;
     while(i<trials){
      // number of entries to show
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
    
      // variables to return
      var game = i;
      //Insert relevant data
      cell1.innerHTML = game.toString();
      cell2.innerHTML = "Phillip";
      cell3.innerHTML = "MEEEE";
      cell4.innerHTML = "122112";
      //increment the counter for the number of simulations
      i = i+1;
     }
    
    }
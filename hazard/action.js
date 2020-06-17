function createRows(){
    //control the number of times the game is played
     var table = document.getElementById("game_winner");
     var trials = document.getElementById("trials_box").value;
     var roll = document.getElementById("guess_box").value;
       
    let i = 0;
    let numRow = 1;
         while(i<trials){
            // number of entries to show
            var row = table.insertRow(numRow);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            
            // variables to return
            var game = i+1;

            //Play Hazard
            var winner = playHazard(roll);

            //keep a tally of the winners for the trials
            var wins = 0;
            var losses= 0;

            if(winner.localeCompare("Player")) wins = wins+1;
            else losses+=1;

            var overall = wins+" : "+losses;

            //Insert relevant data
            cell1.innerHTML = game.toString();
            cell2.innerHTML = roll;
            cell3.innerHTML = winner;
            cell4.innerHTML = overall.toString();
            //increment the counter for the number of simulations
            i = i+1;
            numRow = numRow+1;
         }
    }

function playHazard(roll){

    // Initialize the rolls for Sir Phillip
    const phillips_roll = Math.floor((Math.random() * 10)+3);
    const phillips_roll2 = Math.floor((Math.random() * 10)+3);

    //Array of chance numbers
    var chances = [4,5,6,7,8,9,10];

    //The player wins if Phillip's rolls are the same.
    if(phillips_roll == phillips_roll2) return "Player";

    //Phillip wins if a chance is rolled first, then the main is rolled
    if(chances.includes(phillips_roll)){
        if(phillips_roll2 == roll){
            return "Phillip";
        } 
    }

    /**
     * Below are other victory conditions.
     * If you had a main of 5 or 9, then a roll of 11 or 12 loses.
     * If you had a main of 6 or 8, then a roll of 11 loses, but a roll of 12 wins.
     * If you had a main of 7, then a roll of 11 wins, but a roll of 12 loses.
     * If you roll a 2 or a three, you lose regardless of your main.* 
     */

     //initialize strings for the html
    var phil = "Phillip";
    var player = "Player";

    //losing rolls array for last case case
    let losing_rolls = [2,3];

    //first case
     if(roll == 5 || roll == 9){
        if(phillips_roll2 == 11 || phillips_roll2 == 12) return phil;
        else return player;
    //second case
     }else if(roll == 6 || roll == 8){
        if(phillips_roll == 11 || phillips_roll2 == 11) return phil;
        else if(phillips_roll == 12 || phillips_roll2 == 12) return player;
        else return phil;
    //third case
     }else if(roll == 7){
        if(phillips_roll == 12 || phillips_roll2 == 12) return phil;
        else if(phillips_roll == 11 || phillips_roll2 == 11) return player;
        else return phil;
    //last case
     }else if(losing_rolls.includes(phillips_roll) || losing_rolls.includes(phillips_roll2))return phil;

     //modifier to deal with any particular edge cases for now.
     else return phil;
}
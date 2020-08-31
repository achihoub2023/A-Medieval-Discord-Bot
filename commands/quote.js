//add a list of quotes
function getQuote(){
    let listOfQuotes = ["Had I been present at the Creation, I would have given some useful hints for the better ordering of the universe.",
    "I would rather have a Scot come from Scotland to govern the people of this kingdom well and justly than that you should govern them ill in the sight of all the world.",
    "Don’t depend too much on anyone in this world because even your own shadow leaves you when you are in darkness."];
    var item = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
    return item;
}

module.exports = {
    name:`${prefix}quote`,
    description: "Ping command",
    execute(message, args) {
        var quote = getQuote();
        message.reply(`${quote}`);
	},
};
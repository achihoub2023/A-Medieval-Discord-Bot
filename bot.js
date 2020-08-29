/**
 * What is this:
 * This is Sir Phillip, a discord bot based around a medieval theme
 * Sir Phillip intends to do the following:
 *      Contact APIs as to produced decent content
 *      Use and RNN to develop medieval writing.
 *      TBD
 */


//establish discord clients, child processes
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { isRegExp } = require('util');
client.commands = new Discord.Collection();
//const spawn = require('child_process').spawn

//const requests = require(fetch)

//var script = document.createElement('script');
 
//script.src = '//code.jquery.com/jquery-1.11.0.min.js';
//document.getElementsByTagName('head')[0].appendChild(script); 
/**
 * Create Api requests:
 * Apis contacted are as follows:
 * APOD
 * 
 */
//const request = fetch()


var currentDate = new Date();
//var response = spawn();
 
client.once('ready', () => {
    console.log(client.user.tag +' is Ready!');

});

//add a list of quotes
function getQuote(){
    let listOfQuotes = ["Had I been present at the Creation, I would have given some useful hints for the better ordering of the universe.",
    "I would rather have a Scot come from Scotland to govern the people of this kingdom well and justly than that you should govern them ill in the sight of all the world.",
    "Don’t depend too much on anyone in this world because even your own shadow leaves you when you are in darkness."];
    var item = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
    return item;
}
function showVideo(){
 var list_of_videos = [
    "https://www.youtube.com/watch?v=kJWvmSJ3k9Q",
    "https://www.youtube.com/watch?v=cYcPWLU2-ok"

 ];
 var item = list_of_videos[Math.floor(Math.random() * list_of_videos.length)];
 return item;
}
/**
 * Basic commands
 * ping: 
 * 
 * 
 * TODO: Fix the speghetti code
 */




client.on('message', async message => {
    // ignore messages that are from bots or other communications
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    //list of commands to listen for, see above comment for details
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}wow`) {
        message.reply('deku');
    }else if(message.content ===`${prefix}server` ){
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }else if(message.content ===`${prefix}time`){
        message.channel.send(`This server's time: ${currentDate}`);
    }else if(message.content === `${prefix}enlighten`){
        var quote = getQuote();
        message.reply(`${quote}`);
    }else if(message.content === `${prefix}bard`){
        message.reply(`${showVideo()}`)
    }else if(message.content === `${prefix}hazard`){
        message.reply('Play Hazard against me here: https://hazard-game.herokuapp.com/')
    }
});

//Log into discord and run the bot
client.login(token);
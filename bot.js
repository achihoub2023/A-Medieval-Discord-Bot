/**
 * What is this:
 * This is Sir Phillip, a discord bot based around a medieval theme
 * Sir Phillip intends to do the following:
 *      Contact APIs as to produced decent content
 *      Use and RNN to develop medieval writing.
 *      TBD
 */


//establish discord clients, child processes
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const spawn = require('child_process')


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
client.once('ready', () => {
	console.log(client.user.tag +' is Ready!');
});

/**
 * Create a request to jquery as to connect to python code
 * specifies the location of the RNN 
 */
/**$.ajax({
    type: "POST",
    url: "~/RNN.py",
    data: { param: text},
    dataType:"text",
    success: function(response){
        output = response;
        alert(output);
     }
  }).done(function( o ) {
    message.channel.send('Pong.');
  });
*/

function getQuote(){

}

/**
 * Basic commands
 * 
 * 
 */
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}wow`) {
        message.reply('deku');
    }else if(message.content ===`${prefix}server` ){
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }else if(message.content ===`${prefix}time`){
        message.channel.send(`This server's time: ${currentDate}`);
    }else if(message.content === `${prefix}enlighten`){

    }
});

//Log into discord and run the bot
client.login(token);

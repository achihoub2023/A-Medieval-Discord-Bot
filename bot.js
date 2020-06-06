  
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log(client.user.tag +' is Ready!');
});



client.on('message', message => {
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }else if(message.content ===`${prefix}server` ){
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});


client.login(token);

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


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(client.user.tag +' is Ready!');

});

client.on('message', async message => {
    // ignore messages that are from bots or other communications
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

//Log into discord and run the bot
client.login(token);

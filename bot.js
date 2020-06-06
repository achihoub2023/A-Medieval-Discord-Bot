const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', msg => {  
    if(msg.author.bot) return;
    if (msg.content === 'ping') {     
        msg.reply('Pong!');   
    } 
});
client.login('NzE3ODA0NTMzMjk1ODc0MDQ4.Xts9qQ.wD6l4a4VvI7lOmIecXAnzahzqao');

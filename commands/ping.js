
module.exports = {
    name:`${prefix}ping`,
    description: "Ping command",
    execute(message, args) {
		message.channel.send('Pong.');
	},
};
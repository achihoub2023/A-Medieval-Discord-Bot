function showVideo(){
    var list_of_videos = [
       "https://www.youtube.com/watch?v=kJWvmSJ3k9Q",
       "https://www.youtube.com/watch?v=cYcPWLU2-ok"
    ];
    var item = list_of_videos[Math.floor(Math.random() * list_of_videos.length)];
    return item;
}


module.exports = {
    name:`${prefix}bard`,
    description: "Bard command",
    execute(message, args) {
		message.reply(`${showVideo()}`)
	},
};

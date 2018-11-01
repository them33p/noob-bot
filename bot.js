const Discord = require('discord.js');
var auth = require('./auth.json');

const bot = new Discord.Client();


bot.on('ready', () => {
	console.log(`Logget in som ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	}
});
bot.on('message', message =>{
	if (!message.guild) return;

	if (message.content === 'join') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					message.reply('Jeg har joinet kanalen.');
					//const dispatcher = connection.playFile("/Users/xx/desktop/js/gachi.mp3");
				})
				.catch(console.log);
		} else {
			message.reply('Join en kanal først.')
		}
	}
	if (message.content === 'gachi') {
		console.log('gachimuchi');
		message.member.voiceChannel.connection.playFile("./gachi.mp3");
	}
});

bot.login(auth.token);

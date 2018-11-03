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
	let dispatcher
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

  if (message.content === 'flute') {
    dispatcher = message.member.voiceChannel.connection.playFile('./youtube.mp4');
  }

	if (message.content.startsWith('!v')) {
		console.log('Content: ' + message.content);
			let volumeLevel = message.content.split(" ");
			if (volumeLevel[1] === undefined) {
				message.reply('Velg en verdi mellom 0.0 og 1.0');
			} else {
				console.log(volumeLevel[2]);
				message.reply(dispatcher.volume);
				dispatcher.setVolume(volumeLevel[1]);
			}
		}
});

bot.login(auth.token);

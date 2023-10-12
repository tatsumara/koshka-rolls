const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const intents = [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages
];
const client = new Client({
	intents: intents,
	presence: {
		activities: [{
			type: 'PLAYING',
			name: 'with the yarn of fate.',
		}],
	},
});
client.log = require('consola');

client.once(Events.ClientReady, c => {
	client.log.success(`Ready! Logged in as ${c.user.tag}`)
})

process.on('unhandledRejection', error => {
	client.log.error('Unhandled promise rejection:');
	client.log.error(error);
});
process.on('uncaughtException', error => {
	client.log.error('Uncaught exception:');
	client.log.error(error);
});

client.login(process.env.TOKEN);
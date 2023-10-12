function parseDiceRoll(input) {
	// Remove spaces from the input.
	input = input.replace(/\s/g, '');
  
	// Define a regular expression pattern to match the format "2d6+1" or "10d12-5".
	const regex = /^(\d+)d(\d+)([+\-]\d+)?$/;
  
	// Use the regex pattern to match the input string.
	const match = input.match(regex);
  
	if (match) {
	  // Extract the matched values and convert them to numbers.
	  const amount = parseInt(match[1]);
	  const sides = parseInt(match[2]);
	  
	  // Extract the bonus part and convert it to a number.
	  const bonusMatch = match[3];
	  const bonus = bonusMatch ? parseInt(bonusMatch) : 0;
  
	  // Return an object with the parsed values.
	  return { amount, sides, bonus };
	} else {
	  // Return null if the input doesn't match the expected format.
	  return null;
	}
}

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
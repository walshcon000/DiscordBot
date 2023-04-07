require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online. `);
});

client.on('messageCreate', (message) => {
    console.log(message.content);
});

client.on('messageCreate', (message) => {
    console.log(message.author);
});

client.on('messageCreate', (message) => {
    if (message.content === 'Hello') {
        message.reply('Hi!');
    }
});

client.login(process.env.TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content === 'zana') {
    msg.reply('Pong!');
  }
});
client.login(token).catch(err => console.log(err));

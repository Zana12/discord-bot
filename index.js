const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let replies = [
      "BotDev: ZaNaK",
      "MediaFavoriten Wurfel"
  ]
  setInterval(() => {
    let reply = replies[Math.floor((Math.random() * replies.length))];
    client.user.setActivity(reply, {
        type: "STREAMING",
        url:"https://twitch.tv/Strandable"
    });
  }, 700);

});

client.on('message', msg => {
  /* */
  let prefix = "=";
  if(msg.author.bot || !msg.guild) return;
  if(!msg.content.startsWith(prefix)) return;

  if(msg.content.startsWith(prefix + "ping")) {
      const startTime = Date.now();
      msg.channel.send(`Pong!`)
      .then(msg =>{
          const endTime = Date.now();
          msg.edit(`Pong! (${endTime - startTime}ms)`);
      });
  }

  if(msg.content.startsWith(prefix + "wurfeln")) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("MediaFavoriten Würfel", "https://www.mediafavoriten.de/wp-content/uploads/2015/12/heart.png")
    .setTitle(`🎲 **Sie haben **(` + Math.floor((Math.random() * 6 + 1)) + ") bekommen")
    .setColor("0xf7a909")
    .setThumbnail("https://media.giphy.com/media/5xtDarpTZP1hgRgReLK/giphy.gif")
    return msg.channel.send(embed);
  }
});

client.login(token).catch(err => console.log(err));

var Discord = require("discord.js");
var bot = new Discord.Client();

//If someone sends "virgin"(case insensitive) in nsfw channel, it will post the virgin meme

bot.on("message", message => {
  if (message.content.toLowerCase().includes("virgin") && message.channel.nsfw == true) {
    message.channel.send({
      files: [
        "https://cdn.glitch.com/0f0615ab-2290-4c5a-be11-f353eafa28b5%2F69568364-2576-42b8-8c53-86ba8138ce7f.image.png?v=1598710484938"
      ]
    });
  }
});

bot.login(process.env.TOKEN);

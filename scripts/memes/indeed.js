var Discord = require("discord.js");
var bot = new Discord.Client();

//If someone sends "Indeed"(case insensitive) it will post the Indeed meme

bot.on("message", message => {
  if (message.content.toLowerCase() === "indeed".toLowerCase()) {
    message.channel.send({
      files: [
        "https://cdn.glitch.com/0f0615ab-2290-4c5a-be11-f353eafa28b5%2FIndeed.png"
      ]
    });
  }
});

bot.login(process.env.TOKEN);

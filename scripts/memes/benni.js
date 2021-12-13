var Discord = require("discord.js");
var bot = new Discord.Client();

//If someone sends "Benni"(case insensitive) it will post the Benni meme

bot.on("message", message => {
  if (message.content.toLowerCase().includes("benni".toLowerCase())) {
    message.channel.send({
      files: [
        "https://cdn.glitch.com/0f0615ab-2290-4c5a-be11-f353eafa28b5%2FBenni.png"
      ]
    });
  }
});

bot.login(process.env.TOKEN);

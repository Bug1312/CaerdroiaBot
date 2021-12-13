var Discord = require("discord.js");
var bot = new Discord.Client();

//Command that sets the activity if ping.js doesn't

bot.on("message", message => {
  if (message.content.toLowerCase() === "!update") {
      bot.user.setActivity(`with Bug's Sourcecode`);
  }
});

bot.login(process.env.TOKEN);

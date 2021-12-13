var Discord = require("discord.js");
var bot = new Discord.Client();

//Notifies in specified channel when /scripts is loaded

bot.on("ready", () => {
  //Logs in the console that loading commands is complete
  console.log("Commands are ready");
  //Writes status to say the bot is "Playing with Bug's Sourcecode" and shows loading commands is complete
  bot.user.setActivity(`with Bug's Sourcecode`);
});

//Command that tells you how fast the bot is responding in milliseconds

bot.on("message", message => {
  if (message.content.toLowerCase() === "!ping") {
    message.channel.send(
      "Ping is `" + `${Date.now() - message.createdTimestamp}` + "ms`"
    );
  }
});

bot.login(process.env.TOKEN);

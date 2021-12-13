var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../../config.json");

//SINCE MAY 28 2020 WILL ONLY CHANGE TWO TIMES EVERY TEN MINUTES
//MORE INFO VISIT https://github.com/discordjs/discord.js/issues/4327#issuecomment-636488615

//If message is added to a channel, it will add 1 to the name census-log, if one is removed it will subtract 1

//If message is added
bot.on("message", message => {
  if (
    message.channel ===
    bot.channels.cache.get(config.Channels.Census_Channel_ID) && message.author.bot == false
  ) {
    let name = message.channel.name;
    let num = Number(name.slice(11)) + 1;
    message.channel.setName("census-log-" + num);
  }
});

//If message is removed
bot.on("messageDelete", message => {
  if (
    message.channel === bot.channels.cache.get(config.Channels.Census_Channel_ID) &&
    message.author.bot == false
  ) {
    let name = message.channel.name;
    let num = Number(name.slice(11)) - 1;
    message.channel.setName("census-log-" + num);
  }
});

bot.login(process.env.TOKEN);

var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../config.json");

bot.on("message", message => {
  if (message.content.substr(0, 3).toLowerCase() === "!id") {
    if (
      message.channel ==
      message.member.guild.channels.cache.get(
        config.Channels.Admin_Bot_Channel_ID
      )
    ) {
      try {
        message.channel.send(
          "`<@" +
          message.guild.members.cache.find(
            m =>
              m.user.username.toLowerCase() ===
              message.content.slice(4).toLowerCase()
          ).user.id +
          ">`"
        );
      } catch (err) {//nickname
        try {
          message.channel.send(
            "`<@" +
            message.guild.members.cache.find(
              m => {
                if (m.nickname != undefined && m.nickname.toLowerCase() == message.content.slice(4).toLowerCase()) {
                  return m;
                }
              }
            ).user.id +
            ">`"

          );
        } catch (err) {
          //If the bot does not have access to the user, it will reply with this message
          message.channel.send("Cannot find user, please try again.");
        }
      }
    }
  }
});

bot.login(process.env.TOKEN);

var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../../config.json");

//If a person leaves, it will notify a certain channel

bot.on("raw", event => {
  const eventName = event.t;
  if (eventName === "GUILD_MEMBER_REMOVE") {
    if (event.d.guild_id === config.Guilds.Main_Guild_ID) {
      bot.channels.cache
        .get(config.Channels.Leave_Message_Channel_ID)
        .send(
          "<@" +
          event.d.user.id +
          "> / " +
          event.d.user.username +
          "#" +
          event.d.user.discriminator +
          " has left the server."
        );
    }
  }
});

bot.login(process.env.TOKEN);

var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../../config.json");

//If specified message is reacted with �, it will give a specified role

bot.on("raw", event => {
  //If a reaction is added
  if (
    event.t === "MESSAGE_REACTION_ADD" &&
    event.d.message_id === config.Messages.Announcement_Role_Message_ID &&
    event.d.emoji.name === "🅰️" &&
    event.d.guild_id === config.Guilds.Main_Guild_ID
  ) {
    //find user that reacted
    let user = bot.users.cache.get(event.d.user_id);
    //find role that will be given
    let role = bot.guilds.cache
      .get(config.Guilds.Main_Guild_ID)
      .roles.cache.get(config.Roles.Announcement_Role_ID);
    //gives chosen role to user
    bot.guilds.cache
      .get(config.Guilds.Main_Guild_ID)
      .members.cache.find(member => member.id === user.id)
      .roles.add(role, "reacted to announcement message");
  }
});

bot.login(process.env.TOKEN);

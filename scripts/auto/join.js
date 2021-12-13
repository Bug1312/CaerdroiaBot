var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../../config.json");
var rolemsg;

//If a person joins it will send a message to a specified channel(chosen by name)

bot.on("guildMemberAdd", member => {
  const chan = member.guild.channels.cache.get(
    config.Channels.Join_Message_Channel_ID
  );
  if (!chan) {
    console.log("Invalid Join_Message_Channel_ID in config");
  } else {
    chan
      .send(
        `Welcome to the server ${member}, I assume you want to join the DMU town! Please @ a congress member (the bright red ones) if they are online and not on do not disturb when you can be confirmed by congress into the town, allowing you to build!\n\nYou can also react to this message with the 🅰️ emoji to get the announcement role, which notifies you when the town gets announcements!`
      )
      .then(msg => {
        rolemsg = msg.id;
        console.log(rolemsg);
      });
  }
});

//If a person reacts to the join message 🅰️, they will get a certain role

bot.on("raw", event => {
  if (
    event.t === "MESSAGE_REACTION_ADD" &&
    event.d.message_id === rolemsg &&
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
      .roles.add(role, "reacted to join message");
  }
});

bot.login(process.env.TOKEN);

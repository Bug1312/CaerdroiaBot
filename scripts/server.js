var Discord = require("discord.js");
var bot = new Discord.Client();
var mineping = require("mineping");

//Commands to tell the user if there is a spot they can join on DMU Public or DMU Beta

bot.on("message", message => {
  //If message is "!public" (case-insensitive)
  if (message.content.toLowerCase() === "!public")
    //Gets details of DMU Public Server
    mineping("dmu.swdteam.co.uk", 25587, function(err, response) {
      if (err) console.log(err);
      else {
        //If there isn't an error, reply to the user based on server's max and current players
        if (response.samplePlayers.length < response.maxPlayers) {
          message.reply("Spot avaliable");
        } else {
          message.reply("No spots avaliable");
        }
      }
    });

  //If message is "!beta" (case-insensitive)
  if (message.content.toLowerCase() === "!beta")
    //Gets details of DMU Beta Server
    mineping("dmu.swdteam.co.uk", 25565, function(err, response) {
      if (err) console.log(err);
      else {
        //If there isn't an error, reply to the user based on server's max and current players
        if (response.samplePlayers.length < response.maxPlayers) {
          message.reply("Spot avaliable");
        } else {
          message.reply("No spots avaliable");
        }
      }
    });
});

bot.login(process.env.TOKEN);

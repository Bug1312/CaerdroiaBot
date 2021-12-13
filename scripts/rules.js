var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("../config.json");

//Command that will send rules message in a specified channel

bot.on("message", message => {
  if (message.content.toLowerCase() === "!rules") {
    if (message.member.roles.cache.get(config.Roles.Admin_Role_ID)) {
      //Chooses what channel will send the rules
      let ruleChan = bot.channels.cache.get(
        config.Channels.Rules_Channel_ID
      );
      //Sends rules
      ruleChan
        .send(
          '```Discord Rules```\n\n> 1. Be kind to one another! No rudeness/disrespect toward anyone else, especially not using hate speech. If you want to argue with someone, go in private message.\n\n> 2. If you have a problem with somebody, sort it out in private.\n\n> 3. Mild profanity is fine, (damn, crap etc.) Just don’t go over the top with it. Further profanity can be used in <#717225286038716476>\n\n> 4. Do not impersonate other users either by changing/creating an account to match their account.\n\n> 5. Keep it clean! No offensive, inappropriate or otherwise disgusting content. This also includes usernames. (This can lead to very specific cases, punishments and identification of cases are at Congress discretion)\n\n> 6. You may not spam or post useless messages. In mild cases, a staff member will warn you first.\n\n> 7. Please have an actual name that distinguishes you. This rule spans from random gibberish characters, random nonsense emojis to being "The Doctor". Please pick a nickname that identifies who you are. If you can\'t think of one, you could use your Minecraft username!\n\n> 8. Please refrain from discussing politics.\n\n> 9. Do not post spoilers for any movie series/TV show/book unless in <#719676178608291930>. Expiry for recent spoilers is a week after the initial airdate.\n\n> 10. No porn anywhere in this server whatsoever. Including in <#717225286038716476>.'
        )
        .then(
          ruleChan.send(
            "```DMU Town Rules```\n> 1. All DMU Rules apply within the town.\n\n> 2. Congress have final say in ALL matters.\n\n> 3a. Build only AFTER your house is approved by Congress.\n\n> 3b. Build only on the plot you were given.\n\n> 3c. All build are subject to Congress approval.\n\n> 4. Be nice to your fellow players in town and elsewhere.\n\n> 5. Breaking or editing other player's builds is bannable by the town.\n\n> 6a. Be mindful of where you park your vehicles.\n\n> 6b. Use OFFICIAL TARDIS parking when parking your TARDIS.\n\n> 6c. Private TARDIS parking is acceptable at your house.\n\n> 7. Do not make public use chests private.\n\n> 8. No block towers no matter what used for.\n\n> 9a. Do not create a mine under your plot.\n\n> 9b. You are allowed a basement, just keep it in the footprint of your plot.\n\n> 10. to build you MUST be approved by Congress.\n\n> 11. No basic 'survival' or block houses.\n\n> 12. Respect all Congress members."
          )
        );
    } else {
      message.reply("you do not have permission.");
    }
  }
});

bot.login(process.env.TOKEN);

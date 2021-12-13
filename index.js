//Necessary tools needed to load and run the bot
const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const app = express();
app.use(express.static(__dirname + "public"));
app.listen(8000);
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

//Necessary tools needed to load and run the submission form
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Send submission to specified channel
app.post("/submission", (request, response) => {
    console.log(`Sent ${request.body.submission}`);
    let chan = bot.channels.cache.get("630438938464485387");
    chan.send(request.body.submission);
});


bot.on("ready", () => {
    //Tells logs that the bot is running and has access to a number of users, channels, and guilds/servers
    console.log(
        `Bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`
    );
    //Writes status to say the bot is "Loading" until ping is loaded
    bot.user.setActivity(`Loading...`);
    //Command to notify a channel when someone leaves
    require("./scripts/auto/leave.js");
    //Command to notify a channel when someone joins, as well as give them a choice to get a certain role
    require("./scripts/auto/join.js");
    //Command to change the name of a channel to keep track of log count
    require("./scripts/auto/census.js");
    //Command to give a role based on reaction of a certain message
    require("./scripts/auto/announcement.js");
    //Command to display the Benni meme
    require("./scripts/memes/benni.js");
    //Command to display the Indeed meme
    require("./scripts/memes/indeed.js");
    //Command to display the Virgin meme
    require("./scripts/memes/virgin.js");
    //Command to get ID of a user based off their Discord name
    require("./scripts/id.js");
    //Command to send rules in specified channel
    require("./scripts/rules.js");
    //Commands to tell the user if there is a spot they can join on DMU
    require("./scripts/server.js");
    //Command to get update status if ping.js doesn't
    require("./scripts/updateStatus.js");
    //Command to get ping of the bot
    require("./scripts/ping.js");
});

//Once bot disconnects or crashes, it will reload
bot.on("disconnect", () => {
    bot.login(process.env.TOKEN);
});

bot.login(process.env.TOKEN);
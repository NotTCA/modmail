const Discord = require("discord.js");
const Enmap = require("enmap");
const config = require("./config.json");

const client = new Discord.Client({
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  failIfNotExists: false,
  restTimeOffset: 0,
  partials: ["CHANNEL", "MESSAGE", "REACTION"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
});
client.modmailDb = new Enmap({
  name: "Modmail-Database",
  //dataDir: "./databases/modmail" //create the folder(s)
});
client.settings = new Enmap({
  name: "Settings-Database",
  //dataDir: "./databases/settings" //create the folder(s)
});
client.login(config.token);
client.on("ready", () => {
  console.log(`${client.user.tag} is now online!`);
});

require("./modmail")(client);

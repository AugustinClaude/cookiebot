const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Ceci est un test.");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "test"
};

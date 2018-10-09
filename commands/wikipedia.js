const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const args2 = message.content.split(" ");
  args2.shift();
  message.reply("https://fr.wikipedia.org/w/index.php?search=" + args2.join("+"));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wiki"],
  permLevel: 0
};

module.exports.help = {
  name: "wikipedia"
};
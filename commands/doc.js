const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const args2 = message.content.split(" ");
  args2.shift();
  const doc = ("https://discord.js.org/#/docs/main/stable/search?q=" + args2.join("%20"));
  message.reply(doc);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["discord.js"],
  permLevel: 0
};

module.exports.help = {
  name: "doc"
};
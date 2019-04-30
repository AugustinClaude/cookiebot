const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  message.guild.members.get(args[0]).setNickname(args.slice(args[0]).join(" "));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nick", "name"],
  permLevel: 0
};

module.exports.help = {
  name: "nickname"
};

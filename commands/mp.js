const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const member = message.guild.members.get("302901933419790347");
  member.send(args.join(" "));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["message", "msg"],
  permLevel: 0
};

module.exports.help = {
  name: "mp"
};

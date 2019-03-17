const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const member = message.guild.members.get("302901933419790347");
  member.send(args.join(" "));

  message.reply("votre message a bien été envoyé à mon créateur !");
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

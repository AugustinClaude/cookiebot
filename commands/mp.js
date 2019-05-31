const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const member = message.guild.members.get("302901933419790347");
  if (args.length < 0) return message.reply("vous devez écrire un message !");

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(`${message.author.tag} (ID : ${message.author.id})`)
    .setColor("#ff6600")
    .setDescription(args.join(" "))
    .setFooter(
      `Message envoyé à ${member.user.tag}`,
      `${member.user.displayAvatarURL}`
    )
    .setTimestamp();
  member.send(embed);
  message.author.send(embed);

  message.reply("votre message a bien été envoyé à mon créateur !");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dm", "message", "msg"],
  permLevel: 0
};

module.exports.help = {
  name: "mp"
};

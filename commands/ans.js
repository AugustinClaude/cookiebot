const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const member = message.guild.members.get(args[0]);
  if (!args[0]) return message.reply("vous devez préciser une ID !");
  if (isNaN(args[0])) return message.reply("l'ID est invalide. ");

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(`${message.author.tag} (ID : ${message.author.id})`)
    .setColor("RANDOM")
    .setDescription(args.join(" ").slice(19))
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    )
    .setTimestamp();
  member.send(embed);

  message.reply("votre message a bien été envoyé à mon créateur !");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["answer", "rep"],
  permLevel: 0
};

module.exports.help = {
  name: "ans"
};

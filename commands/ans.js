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

  try {
    await member.send(embed);
    message.author.send("Le message a bien été envoyé au correspondant !");
  } catch (e) {
    message.author.send(
      "L'utilisateur a désactivé ses messages privés, le message ne lui a donc pas été envoyé."
    );
  }
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

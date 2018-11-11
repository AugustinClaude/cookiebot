const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete();
  moment.locale("fr");

  const servIcon = message.guild.iconURL;
  const servName = message.guild.name;
  const lastmember = Array.from(message.channel.guild.members.values())
    .sort((a, b) => b.joinedAt - a.joinedAt)
    .map(m => `<@!${m.id}>`)
    .splice(0, 1);
  const userJoin = moment(message.member.joinedAt).format("Do MMMM YYYY, LTS");
  const servCreate = moment(message.guild.createdAt).format(
    "Do MMMM YYYY, LTS"
  );
  const emojisSize = message.guild.emojis.size;
  const textChannels = message.guild.channels.filter(m => m.type == "text")
    .size;
  const voiceChannels = message.guild.channels.filter(i => i.type == "voice")
    .size;

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("#E69525")
    .setThumbnail(servIcon)
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("🌐 Nom du serveur", servName, true)
    .addField("🏆 Fondateur", message.guild.owner, true)
    .addBlankField()
    .addField(
      "🥝 Membres",
      `**${message.guild.memberCount}** | <mc pour les détails`,
      true
    )
    .addField(`🌎 ${servName} créé le`, servCreate, true)
    .addBlankField()
    .addField(
      `📚 Channels [${message.guild.channels.size}]`,
      `💬 Textuels : **${textChannels}**\n🔊 Vocaux : **${voiceChannels}**`,
      true
    )
    .addField(
      "📜 Nombre d'émojis",
      `**${emojisSize}** | <emoji pour les détails`,
      true
    )
    .addBlankField()
    .addField("🔘 Dernier membre", lastmember, true)
    .addField("🚪 Votre arrivée sur le serveur", userJoin, true)
    .addBlankField();

  return message.channel.send(servEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["infoserv", "is"],
  permLevel: 0
};

module.exports.help = {
  name: "info"
};

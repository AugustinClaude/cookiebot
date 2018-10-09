const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  moment.locale("fr");
    
  const servIcon = message.guild.iconURL;
  const servName = message.guild.name;
  //let emojis = message.guild.emojis.map(e => e).join(' | ')
  const lastmember = Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1);
  const userJoin = moment(message.member.joinedAt).format("Do MMMM YYYY, LTS");
  const servCreate = moment(message.guild.createdAt).format("Do MMMM YYYY, LTS");
  //let emojisSize = message.guild.emojis.size

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("#E69525")
    .setThumbnail(servIcon)
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("🌐 Nom du serveur", servName, true)
    .addField("🏆 Fondateur", message.guild.owner, true)
    .addBlankField()
    .addField("🥝 Nombre de membres", `**${message.guild.memberCount}** | <membercount`, true)
    .addField(`🌎 ${servName} créé le`, servCreate, true)
    .addBlankField()
    .addField("🔘 Dernier membre", lastmember, true)
    .addField("🚪 Votre arrivée sur le serveur", userJoin, true)
    .addBlankField();
  //.addField(`📜 Liste des émojis [${emojisSize}]`, emojis) <-- TROP VOLUMINEUX (trop d'émojis)

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
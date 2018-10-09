const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  const reportedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  moment.locale("fr");

  if (!reportedUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  const reportedReason = args.join(" ").slice(22);

  if (!reportedReason) {
    return message.reply("Merci de préciser une raison!");
  }

  if (reportedUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas report cette personne !");
  }

  const reportedEmbed = new Discord.RichEmbed()
    .setTitle("❌ Reports")
    .setColor("#F02A2A")
    .addField("⛔️ Membre reporté", `${reportedUser} (ID: ${reportedUser.id})`)
    .addField("🌀 Reporté par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Report le", moment(message.createdAt).format("LLL"))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", reportedReason);

  const reportChannel = message.guild.channels.find("name", "logs");

  if (!reportChannel) {
    return message.channel.send(
      ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir report quelqu'un !"
    );
  }

  message.delete();
  reportChannel.send(reportedEmbed);
  console.log("Commande REPORT utilisée!");
  return;
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "report"
};

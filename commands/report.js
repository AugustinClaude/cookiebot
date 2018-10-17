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
    const eLogs = message.channel.send(":x: Channel **'logs'** introuvable.");
    message.channel.send(eLogs).then(msg => msg.delete(2000));

    const m = message.channel.send("Création du channel **'logs'**...");
    message.channel.send(m);

    setTimeout(() => {
      message.guild.createChannel("logs", "text", [
        {
          id: message.guild.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
          allow: ["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"]
        }
      ]);
      m.edit("Channel **'logs'** créé avec succès !");
    }, 5000);
    message.delete(3000).then(msg => msg.delete(2000));
  }

  message.delete();
  reportChannel.send(reportedEmbed);
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

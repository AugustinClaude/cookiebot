const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  moment.locale("fr");

  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    const muteRole = message.guild.roles.find("name", "🚫 Mute 🚫");
    const member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!member)
      return message.channel.send(
        "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
      );

    if (!member.roles.find("name", "🚫 Mute 🚫"))
      return message.channel.send(
        `❌ ${member.user.username}, n'est pas mute!`
      );

    member.removeRole(muteRole.id);
    message.channel.send(`🔊 ${member.user.username}, est maintenant unmute !`);

    const unmuteEmbed = new Discord.RichEmbed()
      .setTitle("❌ UnMutes")
      .setColor("#F02A2A")
      .addField("⛔️ Membre unmute", `${member} (ID: ${member.id})`)
      .addField("🌀 Unmute par", `${message.author} (ID: ${message.author.id})`)
      .addField("🕑 Unmute le", moment(message.createdAt).format("LLL"))
      .addField("💬 Channel", message.channel);

    const unmuteChannel = message.guild.channels.find("name", "logs");

    if (!unmuteChannel) {
      return message.channel.send(
        ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir kick quelqu'un !"
      );
    }

    unmuteChannel.send(unmuteEmbed);
  } else {
    message.reply(
      "Vous n'avez pas les permissions pour éxécuter cette commande !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["um"],
  permLevel: 0
};

module.exports.help = {
  name: "unmute"
};

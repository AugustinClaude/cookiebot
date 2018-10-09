const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  const kickedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  moment.locale("fr");

  if (!kickedUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  const kickedReason = args.join(" ").slice(22);

  if (!kickedReason) {
    return message.reply("Merci de préciser une raison!");
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES", "KICK_MEMBERS")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (kickedUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas kick cette personne !");
  }

  const kickedEmbed = new Discord.RichEmbed()
    .setTitle("❌ Kicks")
    .setColor("#F02A2A")
    .addField("⛔️ Membre kické", `${kickedUser} (ID: ${kickedUser.id})`)
    .addField("🌀 Kick par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Kick le", moment(message.createdAt).format("LLL"))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", kickedReason);

  const kickChannel = message.guild.channels.find("name", "logs");

  if (!kickChannel) {
    return message.channel.send(
      ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir kick quelqu'un !"
    );
  }

  message.guild.member(kickedUser).kick(kickedReason);
  kickChannel.send(kickedEmbed);
  message.channel.send(`${kickedUser} a été kick avec succès !`);
  kickedUser.send(
    `Vous avez été kick du serveur \`\`${message.guild.name}\`\`.`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "kick"
};

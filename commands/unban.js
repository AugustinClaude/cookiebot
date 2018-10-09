const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  const userInGuild = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  moment.locale("fr");

  if (!message.member.hasPermission("MANAGE_MESSAGES", "BAN_MEMBERS")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (userInGuild) {
    return message.reply(
      ":x: Ce membre appartient déjà au serveur ! Vous ne pouvez pas l'unban !"
    );
  }

  const unbanEmbed = new Discord.RichEmbed()
    .setTitle("❌ Unbans")
    .setColor("#F02A2A")
    .addField("⛔️ ID unban", `${args[0]}`)
    .addField("🌀 Unban par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Unban le", moment(message.createdAt).format("LLL"));

  const unbanChannel = message.guild.channels.find("name", "logs");
  if (!unbanChannel) {
    return message.channel.send(
      ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir unban quelqu'un !"
    );
  }

  try {
    await message.guild.unban(args[0]);
    unbanChannel.send(unbanEmbed);
    message.channel.send(`L'ID \`\`${args[0]}\`\` a été unban avec succès !`);
  } catch (e) {
    message.reply("Cette ID n'existe pas ou cet utilisateur n'est pas banni !");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "unban"
};

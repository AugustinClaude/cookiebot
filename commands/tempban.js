const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  moment.locale("fr");

  const tempBanUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  let tempBanReason = args.join(" ").slice(25);

  if (Number.isInteger(parseInt(args[0]))) {
    tempBanReason = args.join(" ").slice(22);
  }

  if (!tempBanReason) {
    return message.reply("Syntaxe : <tempban [@Member] [Durée] [Raison]");
  }

  if (!tempBanUser) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  if (tempBanUser.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
    return message.reply("Vous ne pouvez pas tempban cette personne !");
  }

  const tempBanTime = args[1];
  if (!tempBanTime)
    return message.reply("Merci de préciser la durée du tempban");

  await message.guild.member(tempBanUser).ban(tempBanReason);
  message.channel.send(
    `⛔ <@${tempBanUser.id}> a été tempban pour ${ms(ms(tempBanTime))} !`
  );

  setTimeout(() => {
    message.guild.unban(tempBanUser);
    message.channel.send(`✅ <@${tempBanUser.id}> est unban !`);
  }, ms(tempBanTime));

  tempBanUser.send(
    `Vous avez été banni du serveur \`\`${message.guild.name}\`\` pour ${ms(
      ms(tempBanTime)
    )}.`
  );

  const tempBanEmbed = new Discord.RichEmbed()
    .setTitle("❌ TempBans")
    .setColor("#F02A2A")
    .addField("⛔️ Membre tempban", `${tempBanUser} (ID: ${tempBanUser.id})`)
    .addField("🌀 Tempban par", `${message.author} (ID: ${message.author.id})`)
    .addField("🕑 Tempban le", moment(message.createdAt).format("LLL"))
    .addField("⏳ Durée du tempban", ms(ms(tempBanTime)))
    .addField("💬 Channel", message.channel)
    .addField("❓ Raison", tempBanReason);

  const tempBanChannel = message.guild.channels.find("name", "logs");
  if (!tempBanChannel) {
    return message.channel.send(
      ":x: Channel **'logs'** introuvable. Veuillez créer ce channel avant de pouvoir tempban quelqu'un !"
    );
  }

  tempBanChannel.send(tempBanEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tb"],
  permLevel: 0
};

module.exports.help = {
  name: "tempban"
};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args[1]) return;

  const botEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#0059F2")
    .addField("🍪 **Nom**", `\`\`\`js\n${bot.user.username}\n\`\`\``)
    .addBlankField()
    .addField("📁 **Version**", `\`\`\`js\n1.4.7 | Alpha / Beta\n\`\`\``)
    .addBlankField()
    .addField("👤 **Auteur**", `\`\`\`js\nSpokloo#7791\n\`\`\``)
    .addBlankField()
    .addField(
      "🌐 **Site Web**",
      "=> [[VISITER](https://cookie-bot.site123.me/)] <="
    )
    .addBlankField()
    .addField(
      "📋 **M'inviter**",
      "=> [[INVITER](https://discordapp.com/oauth2/authorize?client_id=488022471048691713&scope=bot&permissions=8)] <="
    )
    .addBlankField()
    .addField(
      "📢 **Serveur Support**",
      "=> [[REJOINDRE](https://discord.gg/TJ2McJA)] <="
    )
    .setFooter(
      "Ce bot a été créé par Spokloo#7791",
      "https://i.imgur.com/C7cjSEe.png"
    )
    .setTimestamp(bot.user.createdAt)
    .setThumbnail(bot.user.displayAvatarURL);

  message.channel.send(botEmbed);
  message.delete();
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["support", "infobot", "ib"],
  permLevel: 0
};

module.exports.help = {
  name: "invite"
};

const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Ping ?");
  const pingEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🏓 Pong!")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(
      "https://images-ext-1.discordapp.net/external/1gz-8O12UyQwspa1A-ckkiG4WJMib7ocS3DEFHF6-jo/https/cdn.discordapp.com/attachments/490819311376531456/493850711076110360/pingpong.png"
    )
    .addField(
      "📶 Latence du serveur",
      `\`\`\`js\n${m.createdTimestamp -
        message.createdTimestamp -
        Math.round(bot.ping)} ms\n\`\`\``,
      true
    )
    .addField(
      "💾 Latence de l'API",
      `\`\`\`js\n${Math.round(bot.ping)} ms\n\`\`\``,
      true
    )
    .addField(
      "🥝 Latence totale",
      `\`\`\`js\n${m.createdTimestamp - message.createdTimestamp} ms\n\`\`\``,
      true
    )
    .addField(
      "🌐 Mémoire utilisée",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} Mo\n\`\`\``,
      true
    );

  m.edit(pingEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "ping"
};

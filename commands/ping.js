const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  message.delete();
  const m = await message.channel.send("🏓 Ping!");
  const pingEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🏓 Pong!")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(
      "https://images-ext-1.discordapp.net/external/1gz-8O12UyQwspa1A-ckkiG4WJMib7ocS3DEFHF6-jo/https/cdn.discordapp.com/attachments/490819311376531456/493850711076110360/pingpong.png"
    )
    .addField(
      "📶 Latence du bot",
      `\`\`\`js\n${m.createdTimestamp - message.createdTimestamp} ms\n\`\`\``,
      true
    )
    .addField(
      "💾 Latence de l'API",
      `\`\`\`js\n${Math.round(bot.ping)} ms\n\`\`\``,
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

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const statsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🏓 Pong!")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField(
      "📥 Memory",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "⬆ Uptime",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "🍪 Users",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "💬 Channels",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "🌐 Guilds",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "📋 Discord.js Version",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField(
      "📄 Node Version",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    );
  message.channel.send(statsEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stat"],
  permLevel: 0
};

module.exports.help = {
  name: "stats"
};

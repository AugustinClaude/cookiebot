const Discord = require("discord.js");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message) => {
  message.delete();
  const duration = moment
    .duration(bot.uptime)
    .format(" D [days], H [hrs], m [mins], s [secs]");

  const users = [];
  var nb = 0;
  bot.guilds.array().forEach(guild => {
    users.push(guild.memberCount);
  });
  users.forEach(n => {
    nb += n;
  });

  const statsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🗂 Statistiques")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField(
      "📥 Memory",
      `\`\`\`js\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB\n\`\`\``,
      true
    )
    .addField("⬆ Uptime", `\`\`\`js\n${duration}\n\`\`\``, true)
    .addField("🍪 Users", `\`\`\`js\n${nb.toLocaleString()}\n\`\`\``, true)
    .addField(
      "💬 Channels",
      `\`\`\`js\n${bot.channels.size.toLocaleString()}\n\`\`\``,
      true
    )
    .addField(
      "🌐 Guilds",
      `\`\`\`js\n${bot.guilds.size.toLocaleString()}\n\`\`\``,
      true
    )
    .addField("📋 Discord.js Version", `\`\`\`js\nv${version}\n\`\`\``, true)
    .addField("📄 Node Version", `\`\`\`js\n${process.version}\n\`\`\``, true);
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

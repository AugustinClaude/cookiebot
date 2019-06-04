const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  message.delete();
  const filtered = bot.guilds.filter(p => p.guild === message.guild.id).array();
  console.log(filtered + "OK DAKO");
  const sorted = filtered.sort((a, b) => a.points - b.points);
  console.log(sorted + "OK DAKO");
  const top10 = sorted.splice(0, 10).reverse();
  console.log(top10 + "OK DAKO");
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(
      "Top 10 des serveurs avec le plus d'utilisateurs sur lesquels je me trouve !"
    )
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setColor("RANDOM");
  for (const data of top10) {
    embed.addField(
      bot.users.get(data.user).tag,
      `Niveau ${data.level} (${data.points} points)`
    );
  }
  return message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["topservers", "top"],
  permLevel: 0
};

module.exports.help = {
  name: "topguilds"
};

const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  message.delete();

  const filtered = bot.guilds.filter(p => p.guild === message.guild.id).array();
  const sorted = filtered.sort((a, b) => a.guilds - b.guilds);
  const top10 = sorted.splice(0, 10).reverse();
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(
      "Voici le Top 10 des meilleurs serveurs sur lesquels je me trouve !"
    )
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setColor("RANDOM");
  for (const data of top10) {
    embed.addField(
      bot.users.get(data.user).tag,
      `Niveau ${data.level} (${data.guilds} points)`
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

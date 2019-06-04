const Discord = require("discord.js");
const arraySort = require("array-sort");

module.exports.run = async (bot, message) => {
  message.delete();
  bot.guilds.forEach(guild => {
    console.log(guild.memberCount());
  });

  /*const filtered = bot.guilds.array();
  console.log(filtered + "\n----------------------\n");
  const sorted = filtered.sort((a, b) => a.points - b.points);
  console.log(sorted + "\n----------------------\n");
  const top10 = sorted.splice(0, 10).reverse();
  console.log(top10 + "\n----------------------\n");*/
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(
      "Top 10 des serveurs avec le plus d'utilisateurs sur lesquels je me trouve !"
    )
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setColor("RANDOM");
  /*for (const data of top10) {
    embed.addField(
      bot.guilds.get(data.guild),
      `**${data.channels}** channels ║ **${data.users}** users`
    );
  }*/
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

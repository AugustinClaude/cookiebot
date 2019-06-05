const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  message.delete();

  const array = [];
  bot.guilds.forEach(guild => {
    array.push(guild.memberCount);
  });

  const servers = bot.guilds
    .map(g => "● " + g.name + " ==> " + g.memberCount + " users")
    //.join("\n\n")
    .sort((a, b) => b.array - a.array)
    .splice(0, 10)
    .reverse();

  /*console.log(array + "\n----------------------\n");
    const sorted = array.sort((a, b) => a.points - b.points);
    console.log(sorted + "\n----------------------\n");
    const top10 = sorted.splice(0, 10).reverse();
    console.log(top10 + "\n----------------------\n");*/
  const embed = new Discord.RichEmbed()
    .setTitle(
      "Top 10 des serveurs avec le plus d'utilisateurs sur lesquels je me trouve !"
    )
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(servers)
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

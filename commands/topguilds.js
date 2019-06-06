const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  message.delete();

  /*const array = [];
  bot.guilds.forEach(guild => {
    array.push(guild.memberCount);
  });

  const servers = bot.guilds
    .map(g => "● **" + g.name + "**\n  => **" + g.memberCount + "** users\n")
    .sort((a, b) => b.memberCount - a.memberCount)
    .splice(0, 10)
    .reverse();*/
  const top = bot.guilds
    .sort((a, b) => a.memberCount - b.memberCount)
    .array()
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
    .setAuthor(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setDescription(
      `● **${top[0].name}**\n  => **${top[0].memberCount}** users\n● **${
        top[1].name
      }**\n  => **${top[1].memberCount}** users\n\n● **${
        top[2].name
      }**\n  => **${top[2].memberCount}** users\n\n● **${
        top[3].name
      }**\n  => **${top[3].memberCount}** users\n\n● **${
        top[4].name
      }**\n  => **${top[4].memberCount}** users\n\n● **${
        top[5].name
      }**\n  => **${top[5].memberCount}** users\n\n● **${
        top[6].name
      }**\n  => **${top[6].memberCount}** users\n\n● **${
        top[7].name
      }**\n  => **${top[7].memberCount}** users\n\n● **${
        top[8].name
      }**\n  => **${top[8].memberCount}** users\n\n● **${
        top[9].name
      }**\n  => **${top[9].memberCount}** users\n`
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

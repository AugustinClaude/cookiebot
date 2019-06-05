const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "c!";
bot.login("NTE5NTU3NjI3MTM5NzE5MTc4.DuhDkA.6tnFsDzKvM3w2h8aGVqO8ifiSlE");

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne !`);
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "top") {
    message.delete();

    /*const array = [];
    bot.guilds.forEach(guild => {
      array.push(guild.memberCount);
    });*/

    const servers = bot.guilds
      .map(g => "● " + g.name + " ║ " + g.memberCount + " users")
      //.join("\n\n")
      .sort((a, b) => a - b)
      .splice(0, 10);

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
  }
});

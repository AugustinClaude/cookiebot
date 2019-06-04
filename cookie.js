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
    const filtered = bot.guilds
      .filter(p => p.guild == bot.guilds.id)
      .array()
      .map(g => g);
    console.log(filtered + "\n----------------------\n");
    const sorted = filtered.sort((a, b) => a.points - b.points);
    console.log(sorted + "\n----------------------\n");
    const top10 = sorted.splice(0, 10).reverse();
    console.log(top10 + "\n----------------------\n");
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
        bot.guilds.get(data.guild),
        `**${data.channels}** channels ║ **${data.users}** users`
      );
    }
    return message.channel.send(embed);
  }
});

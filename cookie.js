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

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "rn") {
    message.delete();
    const mentionned = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (mentionned.nickname == null) {
      return message.channel.send(
        `**${
          mentionned.user.username
        }** n'a pas de surnom, c'est son nom d'origine !`
      );
    }

    if (mentionned.nickname !== mentionned.user.username) {
      return message.channel.send(
        `Le vrai nom de **${mentionned.nickname}** est **${
          mentionned.user.username
        }** !`
      );
    }
  }
});

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

  if (command === "ans") {
    message.delete();
    const member = message.guild.members.get(args[0]);

    if (message.author.id !== "302901933419790347")
      return message.channel.send(
        ":x: Seul le créateur du bot peut utiliser cette commande !"
      );
    if (!args[0]) return message.reply("vous devez préciser une ID !");
    if (isNaN(args[0])) return message.reply("l'ID est invalide. ");

    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setTitle(`${message.author.tag} (ID : ${message.author.id})`)
      .setColor("RANDOM")
      .setDescription(args.join(" ").slice(19))
      .setFooter(
        "Ce bot a été créé par Spokloo#7791",
        "https://i.imgur.com/UP15eCd.png"
      )
      .setTimestamp();

    try {
      await member.send(embed);
      message.author.send(embed);
    } catch (e) {
      message.author.send(
        "L'utilisateur a désactivé ses messages privés, le message ne lui a donc pas été envoyé."
      );
    }
  }
});

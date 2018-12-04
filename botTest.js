const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "t!";
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

  if (command === "kick") {
    const kickedUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!kickedUser) {
      return message.channel.send("Ce pseudo n'existe pas");
    }

    const kickReason = args.join("  ").slice(22);

    if (!kickReason) {
      return message.reply("Merci de préciser une raison!");
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(
        "Permissions insuffisante pour éffectuer cette action !"
      );
    }

    if (kickedUser.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("Vous ne pouvez pas expulser ce membre !");
    }

    const kickEmbed = new Discord.RichEmbed()
      .setDescription("kicks")
      .setColor("#dc143c")
      .addField("Membre Explusé", `${kickedUser} (ID: ${kickedUser.id})`)
      .addField(
        "Auteur de la sanction",
        `${message.author} (ID: ${message.author.id})`
      )
      .addField("Canal", message.channel)
      .addField("Raison", kickReason);

    const kickChannel = message.guild.channels.find("name", "reports");

    if (!kickChannel) {
      message.channel.send(
        "Le channel logs est introuvable ! Veuillez le créer"
      );
    }

    message.guild.member(kickedUser).kick(kickReason);
    kickChannel.send(kickEmbed);
  }
});

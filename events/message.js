const Discord = require("discord.js");

module.exports = (bot, message) => {
  if (message.author.bot) return;
  /*if (message.guild) {
    const key = `${message.guild.id}-${message.author.id}`;
    bot.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });

    bot.points.inc(key, "points");

    const curLevel = Math.floor(0.1 * Math.sqrt(bot.points.get(key, "points")));

    if (bot.points.get(key, "level") < curLevel) {
      message.reply(`Bravo, tu es passé niveau **${curLevel}**! :wink:`);
      bot.points.set(key, curLevel, "level");
    }
  }*/

  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if (message.channel.type === "dm") {
    var errorEmbed = new Discord.RichEmbed()
      .setColor("#AD0003")
      .setDescription(
        "⛔️ Cette commande n'est utilisable que sur serveur! ⛔️"
      );
    message.author.send(errorEmbed);
    return;
  }

  const args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Récupération des permissions
  const perms = bot.permlevel(message);

  // Alias ?
  const cmd =
    bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));

  // Si la commande existe + permission, on lance la commande
  if (cmd && perms >= cmd.conf.permLevel) {
    bot.log(
      "log",
      ` ${message.guild.name} | #${message.channel.name}:
        ${message.author.username}#${message.author.discriminator} (${
  message.author.id
}) ran command ${process.env.PREFIX}${cmd.help.name} ${args.join(" ")}`,
      "CMD"
    );
    cmd.run(bot, message, args, perms);
  }

  //MESSAGES PERSONNALISES
  if (message.guild.id == "264445053596991498") return;
  else {
    if (message.content === "<@488022471048691713> tg".toLowerCase())
      message.channel.send(
        "Nan mais oh ! Tu m'insultes pas comme ça, tu t'es cru chez ta grand-mère ou quoi ?"
      );
    if (message.content === "<@488022471048691713>")
      message.channel.send("Kwa ?");
    if (
      message.content ===
      "<@488022471048691713> Tu penses quoi de <@159985870458322944> ?".toLowerCase()
    )
      message.channel.send(
        "Je l'aime pas avec son air supérieur là ! Sal mosh :("
      );
  }
};

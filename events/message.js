const Discord = require("discord.js");
const fs = require("fs");
const exp = require("../exp.json");

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

  const addExp = Math.floor(Math.random() * 15) + 5;

  if (!exp[message.author.id]) {
    exp[message.author.id] = {
      exp: 0,
      niveau: 1
    };
  }

  fs.writeFile("../exp.json", JSON.stringify(exp), err => {
    if (err) console.log(err);
  });

  const curXP = exp[message.author.id].exp;
  const curLvl = exp[message.author.id].niveau;
  const nextLvl = curLvl * 500;
  exp[message.author.id].exp = curXP + addExp;

  if (nextLvl <= curXP) {
    exp[message.author.id].niveau += 1;
    message.channel.send(`Bravo, tu es passé niveau **${curLvl + 1}**! :wink:`);
  }

  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if (message.channel.type === "dm") {
    var error_embed = new Discord.RichEmbed()
      .setColor("#AD0003")
      .setDescription(
        "⛔️ Cette commande n'est utilisable que sur serveur! ⛔️"
      );
    message.author.send(error_embed);
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
};

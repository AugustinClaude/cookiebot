const Discord = require("discord.js");
var numberRandom = 0;
var partyLaunch = false;

module.exports = (bot, message) => {
  if (message.author.bot) return;
  if (message.guild) {
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
  }

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
  if (message.content === "tg <@488022471048691713>".toLowerCase())
    return message.reply(
      "tu nous paies la Tournée Générale ? Merci beaucoup à toi, ça me va droit dans le coeur !"
    );
  if (message.content === "<@488022471048691713>")
    return message.channel.send("Kwa ?");
  if (
    message.content ===
    "<@488022471048691713> Tu penses quoi de <@159985870458322944> ?".toLowerCase()
  )
    return message.channel.send(
      "Je l'aime pas avec son air supérieur là ! Sal mosh :("
    );

  //JUSTEPRIX (commande)
  if (command === "justeprix" || command === "jp") {
    if (!args[0])
      return message.reply(
        "Pour commencer une partie de **JUSTE PRIX**, tapez la commande : <justeprix start | Pour stopper la partie, tapez la commande : <justeprix stop"
      );

    if (args[1])
      return message.reply(
        "Vous avez préciser trop d'arguments. Syntaxe: <justeprix start"
      );

    //START
    if (args[0] === "start") {
      message.channel.send(
        message.author + " a démarré une partie de **JUSTE PRIX** 💰"
      );
      const replies = [
        "💰 Combien coûte ce vélo ?",
        "💰 Combien coûte, à ton avis, cette magnifique balle de tennis ?",
        "💰 Juste, O.M.G... c'est un minerais de diamant ? Un vrai ?! Il doit coûter cher ! A ton avis, combien coûte-t-il ?",
        "💰 Combien doit coûter ce PC gamer de qualité ? C'est cher c'te merde !",
        "💰 Wahou, quel beau clavier LED, combien il coûte à ton avis ?",
        "💰 Quel belle manette de PS4 ! Elle coûte combien à ton avis ?",
        "💰 Oh mon dieu ! Incroyable ! As-tu vu ce gravier d'une qualité extraordinaire ? Ce gravier doit coûter combien pour toi ?"
      ];
      const result = Math.floor(Math.random() * replies.length);
      message.channel.send(replies[result]);
      partyLaunch = true;
      numberRandom = Math.floor(Math.random() * (50000 - 0) + 0);
      console.log(
        `• ${
          message.author.username
        } à démarré une partie de JUSTE PRIX*\nLe nombre est : ${numberRandom}`
      );
    }

    //STOP
    if (args[0] === "stop") {
      if (partyLaunch == true) {
        message.channel.send(
          message.author + " a stoppé la partie de **JUSTE PRIX** en cours ! 💰"
        );
        console.log(
          `• ${message.author.username} à stoppé la partie de JUSTE PRIX`
        );
        partyLaunch = false;
      } else {
        message.reply(
          ":x: Aucune partie n'a été commencée ! Utilisez <justeprix start pour commencer une partie !"
        );
      }
    }
  }

  //NOMBRE A DEVINER (justeprix)
  if (partyLaunch == true) {
    if (!isNaN(message.content)) {
      if (message.content > numberRandom) {
        message.reply(
          ":x: Non ! Mauvaise réponse !\nLe vrai prix est plus **PETIT** ⬇ !\nEssaie encore 😉"
        );
      } else if (message.content < numberRandom) {
        message.reply(
          ":x: Non ! Mauvaise réponse !\nLe vrai prix est plus **GRAND** ⬆ !\nEssaie encore 😉"
        );
      } else {
        message.channel.send(
          `🎉 BRAVO ! 🎉 **${
            message.author.username
          }** à deviné le prix de cet objet ! 🎊`
        );
        partyLaunch = false;
      }
    }
  }
};

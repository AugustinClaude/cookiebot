const Discord = require("discord.js");
var numberRandom = 0;
var partyLaunch = false;

module.exports.run = async (bot, message, args) => {
  if (!args[0])
    return message.reply(
      "Pour commencer une partie de **JUSTE PRIX**, tapez la commande : <justeprix start | Pour stopper la partie, tapez la commande : <justeprix stop"
    );

  if (args[1])
    return message.reply(
      "Vous avez préciser trop d'arguments. Syntaxe: <justeprix start"
    );

  if (args[0] == "start") {
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

  if (partyLaunch && args[0] != null) {
    if (Number.isInteger(parseInt(args[0]))) {
      if (args[0] > numberRandom) {
        message.reply(
          ":x: Non ! Mauvaise réponse !\nLe vrai prix est plus **PETIT** ⬇ !\nEssaie encore 😉"
        );
      } else if (args[0] < numberRandom) {
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

  if (args[0] == "stop") {
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
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jp"],
  permLevel: 0
};

module.exports.help = {
  name: "justeprix"
};

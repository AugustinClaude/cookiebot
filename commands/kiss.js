const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const kissUserAuto = message.mentions.users.first();
  const kissUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <kiss @membre **OU** <kiss random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (kissUser) var random = kissUser.user.username;

  if (args[0] !== "random" && !kissUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/kiss");

  try {
    if (message.author === kissUserAuto) {
      const kissEmbed = new Discord.RichEmbed()
        .setTitle(
          `**${
            message.author.username
          }** s'embrasse lui même O_o Comment c'est possible ? o_O`
        )
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(kissEmbed);
    }

    const kissEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** embrasse **${random}** ! Trop mignon :heart:`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(kissEmbed);
  } catch (e) {
    message.channel.send(
      "Une erreur est survenue et il m'est impossible d'exécuter cette commande ! Peut-être que la syntaxe est incorrecte ou alors l'API utilisée ne fonctionne pas !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "kiss"
};

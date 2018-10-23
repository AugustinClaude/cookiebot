const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const tickleUserAuto = message.mentions.users.first();
  const tickleUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <tickle @membre **OU** <tickle random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (tickleUser) var random = tickleUser.user.username;

  if (args[0] !== "random" && !tickleUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/tickle");

  try {
    if (message.author === tickleUserAuto) {
      const tickleEmbed = new Discord.RichEmbed()
        .setTitle(
          `**${
            message.author.username
          }** se chatouille lui même O_o Il est vraiment bizarre ce gars .-.`
        )
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(tickleEmbed);
    }

    const tickleEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** chatouille **${random}** ! Le pauvre :joy:`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(tickleEmbed);
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
  name: "tickle"
};

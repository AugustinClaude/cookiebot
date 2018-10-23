const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const cuddleUserAuto = message.mentions.users.first();
  const cuddleUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <cuddle @membre **OU** <cuddle random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (cuddleUser) var random = cuddleUser.user.username;

  if (args[0] !== "random" && !cuddleUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/cuddle");

  try {
    if (message.author === cuddleUserAuto) {
      const cuddleEmbed = new Discord.RichEmbed()
        .setTitle(
          `**${
            message.author.username
          }** se réconforte lui même O_o Toujours aussi bizarre ce gars ;-;`
        )
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(cuddleEmbed);
    }

    const cuddleEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** réconforte **${random}** ! Trop mignon :heart:`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(cuddleEmbed);
  } catch (e) {
    message.channel.send(
      "Une erreur est survenue et il m'est impossible d'exécuter cette commande ! Peut-être que la syntaxe est incorrecte ou alors l'API utilisée ne fonctionne pas !"
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["caress"],
  permLevel: 0
};

module.exports.help = {
  name: "cuddle"
};

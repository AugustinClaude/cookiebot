const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const slapUserAuto = message.mentions.users.first();
  const slapUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <slap @membre **OU** <slap random !"
    );

  if (args[0] === "random") {
    random = message.guild.members.random().user.username;
  } else if (slapUser) random = slapUser.user.username;

  if (args[0] !== "random" && !slapUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");

  try {
    if (message.author === slapUserAuto) {
      const slapEmbed = new Discord.RichEmbed()
        .setTitle(
          `**${message.author.username}** s'est frappé lui même O_o D'accord.`
        )
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(slapEmbed);
    }

    const slapEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** a frappé **${random}** ! C'est vraiment méchant 😕 !`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(slapEmbed);
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
  name: "slap"
};

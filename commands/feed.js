const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  const feedUserAuto = message.mentions.users.first();
  const feedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <feed @membre **OU** <feed random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random().user.username;
  } else if (feedUser) var random = feedUser.user.username;

  if (args[0] !== "random" && !feedUser)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const { body } = await superagent.get("https://nekos.life/api/v2/img/feed");

  try {
    if (message.author === feedUserAuto) {
      const feedEmbed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username}** se donne à manger... o_O`)
        .setImage(body.url)
        .setColor("RANDOM");

      return message.channel.send(feedEmbed);
    }

    const feedEmbed = new Discord.RichEmbed()
      .setTitle(
        `**${
          message.author.username
        }** donne à manger à **${random}** ! Belle action de sa part ! 🥖`
      )
      .setImage(body.url)
      .setColor("RANDOM");

    return message.channel.send(feedEmbed);
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
  name: "feed"
};

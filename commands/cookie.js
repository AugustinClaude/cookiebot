const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <cookie @membre **OU** <cookie random !"
    );

  if (args[0] === "random") {
    var random = message.guild.members.random();
  } else if (mentionned) var random = mentionned;

  if (args[0] !== "random" && !mentionned)
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\""
    );

  const msg = await message.channel.send(
    `${random}, un Cookie :cookie: vous a été donné par ${message.author} !`
  );

  await msg.react("🍪");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "cookie"
};

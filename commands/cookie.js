module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  var random;

  if (!args[0])
    return message.reply(
      "Syntaxe incorrecte ! Exemple : <cookie @membre **OU** <cookie random / rdm **OU** <cookie everyone !"
    );

  if (args[0] === "everyone") {
    const msg = await message.channel.send(
      `Aujourd'hui, c'est ${
        message.author
      } qui vous paye la tournée de cookie ! Bonne fête à tous !`
    );

    await msg.react("🍪");
  }

  if (args[0] === "random" || args[0] === "rdm") {
    random = message.guild.members.random();
  } else if (mentionned) random = mentionned;

  if (
    args[0] !== "random" &&
    args[0] !== "rdm" &&
    !mentionned &&
    args[0] !== "everyone"
  )
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur ! Ou alors vous avez mal orthographié \"__random__\" ou \"__everyone__\""
    );

  if (random.id === message.author.id) {
    const msg = await message.channel.send(
      `${message.author} s'est donné un Cookie :cookie: ! Oké .-.`
    );

    await msg.react("🍪");
  } else if (random.id === "488022471048691713") {
    const msg = await message.channel.send(
      `${random}, vous vous êtes donné un Cookie :cookie: ?! Mais comment cela est-ce possible ? J'espère que vous n'avez pas encore mangé votre propre corps ! Cela serait honteux !`
    );

    await msg.react("🍪");
  } else {
    const msg = await message.channel.send(
      `${random}, un Cookie :cookie: vous a été donné par ${message.author} !`
    );

    await msg.react("🍪");
  }
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

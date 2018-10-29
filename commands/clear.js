const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "Vous n'avez pas la permission d'exécuter cette commande !"
    );

  //let messages = await message.channel.fetchMessages(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  //message.channel.bulkDelete(messages.filter(m => m == "true"))
  //if (messages.pinned) messages

  if (args > 100)
    return message.reply(
      "❌ Vous ne pouvez pas clear plus de 100 messages en une fois."
    );

  if (isNaN(args[0]))
    return message.reply("Syntaxe : <clear [Nombre de message à supprimer]");

  if (!args[0])
    return message.reply("Syntaxe : <clear [Nombre de message à supprimer]");

  try {
    await message.channel.bulkDelete(args[0]).then(() => {
      message.channel.bulkDelete(1);
      message.channel
        .send(`🗑 J'ai supprimé ***${args[0]} messages*** avec succès !`)
        .then(msg => msg.delete(1000));
    });
  } catch (e) {
    message.delete();
    message.channel
      .send(
        ":x: Je ne peux pas supprimer des messages datant de plus de 14 jours !"
      )
      .then(msg => msg.delete(2000));
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["purge"],
  permLevel: 0
};

module.exports.help = {
  name: "clear"
};

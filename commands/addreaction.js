const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(
      "Vous n'avez pas les permissions pour exécuter cette commande !"
    );
  }

  const messageId = args[0];
  if (!messageId)
    return message.reply(
      "Please provide the ID of a message\n<addreaction [MESSAGE ID] [EMOJI]"
    );

  const emoji = args[1];
  if (!emoji)
    return message.reply(
      "Please provide a valid emoji !\n<addreaction [MESSAGE ID] [EMOJI]"
    );

  const msg = await message.channel.send(args[0]).then(mess => mess.delete());
  try {
    await msg.react(args[1]);
  } catch (e) {
    message.reply("The message ID or the emoji is incorrect");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ar"],
  permLevel: 0
};

module.exports.help = {
  name: "addreaction"
};

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!mentionned) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }
  if (Number.isInteger(parseInt(args[0]))) {
    return message.channel.send(
      `L'id \`${args[0]}\` correspond à l'utilisateur ${mentionned}`
    );
  } else
    return message.channel.send(
      `L'id de ${mentionned} est \`${mentionned.id}\``
    );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "id"
};

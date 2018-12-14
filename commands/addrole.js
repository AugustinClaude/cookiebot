const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const mentionned = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!mentionned) {
    return message.channel.send(
      "L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !"
    );
  }

  const role = message.guild.roles.find(r => r.name === "Secrétaire Général");
  if (!role) return message.channel.send("Ce rôle n'existe pas");
  else mentionned.addRole(role.id);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ar", "arole"],
  permLevel: 0
};

module.exports.help = {
  name: "addrole"
};

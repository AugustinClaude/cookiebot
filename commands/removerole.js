const Discord = require("discord.js");

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

  if (!args.join(" ").slice(22))
    return message.reply("Veuillez préciser un rôle existant");

  const role = message.guild.roles.find(
    r => r.name === args.join(" ").slice(22)
  );

  if (!role) return message.reply("Ce rôle n'existe pas");

  if (!mentionned.hasRole(r => r.name === role))
    return message.channel.send(
      `${mentionned} n'a pas ce rôle, on ne peux pas le lui retirer`
    );
  else {
    try {
      await mentionned.removeRole(role.id);
      message.channel.send(
        `Le rôle : ${role} à bien été retiré de ${mentionned} !`
      );
    } catch (e) {
      return message.channel.send(
        "Une erreur est survenue lors de l'enlèvement du rôle. Ceci est probablement dû aux manques de permissions (ça pourrait aussi être la hiérarchie des rôles)."
      );
    }
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rrole"],
  permLevel: 0
};

module.exports.help = {
  name: "removerole"
};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!args[0] || !args.join(" "))
    return message.reply(
      `Syntaxe incorrecte ! Vous devez marquer \`<rolecount [nom d'un role]\``
    );

  const roleID = "530733089442365446";
  const role = message.guild.roles.get(roleID).members;

  if (!role) return message.reply("Vous avez donné un rôle qui n'existe pas !");
  else {
    return message.channel.send(
      `Le rôle \`${role.name}\` comprend \`${role.size} membres\``
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rc", "rcount"],
  permLevel: 0
};

module.exports.help = {
  name: "rolecount"
};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!args[0] || !args.join(" "))
    return message.reply(
      `Syntaxe incorrecte ! Vous devez marquer \`<rolecount [nom d'un role]\``
    );

  const role = message.guild.roles.find(
    r => r.name == args[0] || r.name == args.join(" ")
  );

  var nb;
  message.guild.members.forEach(nb => {
    if (message.guild.members.has(role)) nb + 1;
  });

  if (!role) return message.reply("Vous avez donné un rôle qui n'existe pas !");
  else {
    return message.channel.send(
      `Le rôle \`${role.name}\` comprend \`${nb} membres\``
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

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!args[0] || !args.join(" "))
    return message.reply(
      `Syntaxe incorrecte ! Vous devez marquer \`<rolecount [nom d'un role]\``
    );

  const roleStep = `\\${args[0]}`;
  message.channel.send(roleStep);
  const roleID = roleStep.slice(3, -1);
  const role = message.guild.roles.get(roleID).members;

  const servEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField("Rôle", `**__${message.guild.roles.get(roleID)}__**`)
    .addField("Membres", `**${role.size}**`);

  return message.channel.send(servEmbed);
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

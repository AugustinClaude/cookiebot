const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!args[0] || !args.join(" "))
    return message.reply(
      `Syntaxe incorrecte ! Vous devez marquer \`<rolecount [nom d'un role]\``
    );

  const servIcon = message.guild.iconURL;
  const servName = message.guild.name;
  const roleID = args[0].slice(3, -1);
  const role = message.guild.roles.get(roleID).members;

  const servEmbed = new Discord.RichEmbed()
    .setAuthor(servName, servIcon)
    .setColor("RANDOM")
    .setFooter(bot.user.username + " ©", bot.user.displayAvatarURL)
    .setTimestamp()
    .addField(`${message.guild.roles.get(roleID)}`, role.size + "membres");

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

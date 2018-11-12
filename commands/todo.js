const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  const reminderTime = args[0];
  if (!reminderTime)
    return message.channel.send(
      "**Please specify a time for me to remind you.\nUsage: <todo 15min [thing to remind]**"
    );

  const reminder = args.slice(1).join(" ");

  const remindEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .addField("Reminder", `\`\`\`fix\n${reminder}\n\`\`\``)
    .addField("Time", `\`\`\`fix\n${reminderTime}\n\`\`\``)
    .setTimestamp();

  message.channel.send(remindEmbed);

  setTimeout(function() {
    message.channel.send(
      `Hey ${
        message.author
      } :D, you wanted me to remind you this ! :\n\`${reminder}\``
    );
  }, ms(reminderTime));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["remind"],
  permLevel: 0
};

module.exports.help = {
  name: "todo"
};

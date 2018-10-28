module.exports.run = async (bot, message) => {
  bot.emit(
    "guildMemberAdd",
    message.member || (await message.guild.fetchMember(message.author))
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "welcome"
};

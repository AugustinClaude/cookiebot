module.exports.run = async (bot, message) => {
  message.delete();
  if (message.member.id !== "483035230731632640") return;

  bot.emit(
    "guildMemberAdd",
    message.member || (await message.guild.fetchMember(message.author))
  );

  await wait(3000);

  bot.emit(
    "guildMemberRemove",
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

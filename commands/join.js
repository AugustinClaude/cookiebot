module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.channel.send("You're not connect to a voice channel !");

  if (message.guild.me.voiceChannel)
    return message.channel.send("I'm already connect to a voice channel !");

  message.member.voiceChannel.join();
  message.reply("I join your channel !");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "join"
};

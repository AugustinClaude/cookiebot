module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.reply("You're not connect to a voice channel !");

  if (!message.guild.me.voiceChannel)
    return message.reply("I'm not connect to a voice channel !");

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID)
    return message.reply("You're not in the same channel as me !");

  message.guild.me.voiceChannel.leave();
  message.channel.send("⏹ Music stopped. I have left your channel.");
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["leave"],
  permLevel: 0
};

module.exports.help = {
  name: "stop"
};

var servers = {};

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.reply("You're not connect to a voice channel !");

  var server = servers[message.guild.id];

  if (server.dispatcher) {
    server.dispatcher.end();
    message.channel.send("⏭ Song skipped successfully !");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "play"
};

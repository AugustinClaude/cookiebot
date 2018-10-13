var servers = {};
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.reply("You're not connect to a voice channel !");

  const connection = await message.member.voiceChannel.join();

  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(
    ytdl(server.queue[0], { filter: "audioonly" })
  );

  server.queue.shift();

  if (server.dispatcher) {
    server.dispatcher.end();
    message.channel.send("⏭ Song skipped successfully !");
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["next"],
  permLevel: 0
};

module.exports.help = {
  name: "skip"
};

var servers = {};
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.reply("You're not connect to a voice channel !");

  function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(
      ytdl(server.queue[0], { filter: "audioonly" })
    );

    server.queue.shift();

    server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
    });
    if (server.dispatcher) {
      server.dispatcher.end();
      message.channel.send("⏭ Song skipped successfully !");
    }
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

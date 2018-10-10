const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.channel.send("You're not connect to a voice channel !");

  /*if (message.guild.me.voiceChannel)
    return message.channel.send("I'm already connect to a voice channel !");*/

  if (!args[0]) return message.channel.send("Please specify a YouTube link !");

  const validate = await ytdl.validateURL(args[0]);

  if (!validate)
    return message.channel.send("Sorry, this link is not available ! 😦");

  const info = await ytdl.getInfo(args[0]);
  const connection = await message.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: "audioonly" })
  );

  message.channel.send(
    `▶ **Now Playing** : \`\`\`fix\n${
      info.title
    }\n\`\`\`\n⏳ **Duration** : \`\`\`\n${info.begin}\n\`\`\`\n**Link** : ${
      args[0]
    }`
  );
  message.delete();
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

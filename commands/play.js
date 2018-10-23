const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voiceChannel)
    return message.reply("You're not connect to a voice channel !");

  /*if (message.guild.me.voiceChannel)
    return message.reply("I'm already connect to a voice channel !");*/

  if (!args[0]) return message.reply("Please specify a YouTube link !");

  const validate = await ytdl.validateURL(args[0]);

  if (!validate) return message.reply("Sorry, this link is not available ! 😦");

  const info = await ytdl.getInfo(args[0]);
  const connection = await message.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: "audioonly" })
  );

  var artist = info.media.artist;

  if (!artist)
    var artist = "I couldn't find any artist for this song, sorry :(";

  message.channel.send(
    `▶ **Now Playing** : \`\`\`fix\n${
      info.title
    }\n\`\`\`\n⏳ **Duration** : \`\`\`js\n${
      info.length_seconds
    } seconds\n\`\`\`\n👀 **Views** : \`\`\`js\n${
      info.view_count
    } views\n\`\`\`\n📅 **Published**\`\`\`js\n${
      info.status
    }\n\`\`\`\n👤 **Video Author** : \`\`\`css\n${
      info.author.name
    }\n\`\`\`\n🎵 **Song Writer** : \`\`\`fix\n${artist}\n\`\`\`\n🌐 **Link** : ${
      info.video_url
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

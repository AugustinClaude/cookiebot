const ytdl = require("ytdl-core");
const queue = new Map();

module.exports.run = async (bot, message, args) => {
  const serverQueue = queue.get(message.guild.id);
  const info = await ytdl.getInfo(serverQueue.songs[0].url);

  if (!message.guild.me.voiceChannel)
    return message.reply("I'm not connect to a voice channel !");

  if (!serverQueue) return message.reply("There is nothing playing.");
  if (serverQueue) var artist = info.media.artist;

  if (!artist)
    var artist = "I couldn't find any artist for this song, sorry :(";

  return message.channel.send(
    `▶ **Now Playing** : \`\`\`fix\n${
      info.title
    }\n\`\`\`\n⏳ **Duration** : \`\`\`js\n${
      info.length_seconds
    } seconds\n\`\`\`\n👀 **Views** : \`\`\`js\n${
      info.view_count
    } views\n\`\`\`\n👤 **Video Author** : \`\`\`css\n${
      info.author.name
    } \n\`\`\`\n🎵 **Song Writer** : \`\`\`fix\n${artist} \n\`\`\`\n🌐 **Link** : ${
      info.video_url
    }`
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["np"],
  permLevel: 0
};

module.exports.help = {
  name: "nowplaying"
};

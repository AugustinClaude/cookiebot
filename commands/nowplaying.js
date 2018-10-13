const ytdl = require("ytdl-core");
const queue = new Map();
var servers = {};

module.exports.run = async (bot, message, args) => {
  var server = servers[message.guild.id];
  //const info = await ytdl.getInfo();

  if (!server) return message.reply("There is nothing playing.");
  else {
    return message.reply(server);
    /*var artist = info.media.artist;

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
    );*/
  }
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

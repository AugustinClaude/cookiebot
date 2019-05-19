module.exports.run = async (bot, message) => {
  const args2 = message.content.split(" ");
  args2.shift();
  message.reply(
    "https://www.youtube.com/results?search_query=" + args2.join("+")
  );
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yt"],
  permLevel: 0
};

module.exports.help = {
  name: "youtube"
};

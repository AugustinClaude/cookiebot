module.exports.run = async (bot, message) => {
  const args2 = message.content.split(" ");
  args2.shift();
  const doc =
    "https://discord.js.org/#/docs/main/stable/search?q=" + args2.join("%20");
  message.reply(doc);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["discord.js", "discjs"],
  permLevel: 0
};

module.exports.help = {
  name: "doc"
};

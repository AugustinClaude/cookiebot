const Canvas = require("canvas");
const snekfetch = require("snekfetch");

module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Goodbye <@${member.id}> ! You can come back in \`\`${
        member.guild.name
      }\`\` at anytime !\nJust don't forget the link ! :D`
    );
  });

  const channel = member.guild.channels.find(
    ch =>
      ch.name === "welcome" ||
      ch.name === "bienvenue" ||
      ch.name === "🚪-bienvenue-🚪"
  );

  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage('./wallpaper.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'goodbye-image.png');

  channel.send(attachment);
};

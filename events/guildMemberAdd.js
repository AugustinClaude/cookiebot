const Canvas = require("canvas");
const snekfetch = require("snekfetch");

module.exports = (bot, member) => {
  member.createDM().then(function(channel) {
    return channel.send(
      `Welcome to \`\`${member.guild.name}\`\` <@${
        member.id
      }> ! Don't forget to check the rules !`
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
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  channel.send(attachment);
};

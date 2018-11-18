const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const bot = new Discord.Client();

const Canvas = require("canvas");
const snekfetch = require("snekfetch");

const serverStats = {
  guildID: "302902092006424577",
  memberCountID: "513671667042615314",
  userCountID: "513671473139810308",
  botCountID: "513671575791206421"
};

const http = require("http");
setInterval(function() {
  http.get("https://cookiebot-discord.herokuapp.com/");
}, 300000);

bot.config = require("./modules/functions")(bot);

const Enmap = require("enmap");
bot.points = new Enmap({ name: "points" });

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

(async function() {
  const cmdFiles = await readdir("./commands/");
  cmdFiles.forEach(f => {
    try {
      const props = require(`./commands/${f}`);
      bot.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
      });
    } catch (e) {
      bot.log(`Impossible de charger la commande ${f}: ${e}`);
    }
  });

  const eventFiles = await readdir("./events/");
  eventFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  bot.login(process.env.BOT_TOKEN);
})();

// CANVAS WELCOME IMAGE

const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");

  let fontSize = 70;

  do {
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
};

bot.on("guildMemberAdd", async member => {
  //CHANNEL => USERCOUNT : 0 etc...

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels
    .get(serverStats.memberCountID)
    .setName(`🥝 Membres : ${member.guild.memberCount}`);
  bot.channels
    .get(serverStats.userCountID)
    .setName(
      `🧑 Humains : ${member.guild.members.filter(m => !m.user.bot).size}`
    );
  bot.channels
    .get(serverStats.botCountID)
    .setName(`🤖 Bot : ${member.guild.members.filter(m => m.user.bot).size}`);

  //CANVAS
  const channel = member.guild.channels.find(
    ch =>
      ch.name === "welcome" ||
      ch.name === "bienvenue" ||
      ch.name === "🚪-bienvenue-🚪"
  );

  if (!channel) return;

  try {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./wallpaper.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = "32px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      "Welcome to the guild,",
      canvas.width / 2.5,
      canvas.height / 3.5
    );

    ctx.font = applyText(canvas, member.user.tag + " !");
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      member.user.tag + " !",
      canvas.width / 2.5,
      canvas.height / 1.8
    );

    ctx.font = "28px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      `We are now ${member.guild.memberCount} !`,
      canvas.width / 2.5,
      canvas.height / 1.27
    );

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "welcome-image.png"
    );

    channel.send(attachment);
  } catch (e) {
    channel.send(
      `Welcome to \`${member.guild.name}\` <@${member.id}> ! Enjoy ;)`
    );
  }
});

// CANVAS GOODBYE IMAGE

bot.on("guildMemberRemove", async member => {
  //CHANNEL => USERCOUNT : 0 etc...

  if (member.guild.id !== serverStats.guildID) return;

  bot.channels
    .get(serverStats.memberCountID)
    .setName(`🥝 Membres : ${member.guild.memberCount}`);
  bot.channels
    .get(serverStats.userCountID)
    .setName(
      `🧑 Humains : ${member.guild.members.filter(m => !m.user.bot).size}`
    );
  bot.channels
    .get(serverStats.botCountID)
    .setName(`🤖 Bot : ${member.guild.members.filter(m => m.user.bot).size}`);

  //CANVAS
  const channel = member.guild.channels.find(
    ch =>
      ch.name === "welcome" ||
      ch.name === "bienvenue" ||
      ch.name === "🚪-bienvenue-🚪"
  );

  if (!channel) return;
  try {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./wallpaper.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = "32px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Goodbye,", canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, member.user.tag + " !");
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      member.user.tag + " !",
      canvas.width / 2.5,
      canvas.height / 1.8
    );

    ctx.font = "28px Impact";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(
      `We are now ${member.guild.memberCount} !`,
      canvas.width / 2.5,
      canvas.height / 1.27
    );

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(
      canvas.toBuffer(),
      "goodbye-image.png"
    );

    channel.send(attachment);
  } catch (e) {
    channel.send(
      `Goodbye <@${member.id}> ! You can come back in \`${
        member.guild.name
      }\` at anytime !`
    );
  }
});

// ---------------------------------------------------------------------------------- //
/*bot.on('message', async message => {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: process.env.PREFIX
    }
  }


  let prefix = prefixes[message.guild.id].prefixes;

  let messageArray = message.content.split(' ');
  let command = messageArray[0];
  let args = messageArray.slice(1);
  //let prefix = process.env.PREFIX

  let commandFile = bot.commands.get(command.slice(prefix.length));
  if (commandFile) commandFile.run(bot, message, args);
})*/

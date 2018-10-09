const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const bot = new Discord.Client();

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

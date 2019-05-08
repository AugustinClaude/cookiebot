const Discord = require("discord.js");
const math = require("math-expression-evaluator");

module.exports.run = async (bot, message, args) => {
  message.delete();
  const mathembed = new Discord.RichEmbed()
    .setColor("#99ff66")
    .setTitle("➗ Maths ➕");

  let result;
  if (!args[0]) {
    mathembed.setDescription("Merci de mettre une expression !");
    return message.channel.send(mathembed);
  }

  try {
    result = math.eval(args.join(" "));
  } catch (e) {
    result = "Expression invalide !";
  }

  mathembed
    .addField("Calcul", `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField("Résultat", `\`\`\`js\n${result}\`\`\``);

  message.channel.send(mathembed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["maths", "calcul"],
  permLevel: 0
};

module.exports.help = {
  name: "math"
};

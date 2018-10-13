const Discord = require("discord.js");
const translate = require("google-translate-api");
const Langs = ["afrikaans", "albanian", "amharic", "arabic", "armenian", "azerbaijani", "bangla", "basque", "belarusian", "bengali", "bosnian", "bulgarian", "burmese", "catalan", "cebuano", "chichewa", "chinese simplified", "chinese traditional", "corsican", "croatian", "czech", "danish", "dutch", "english", "esperanto", "estonian", "filipino", "finnish", "french", "frisian", "galician", "georgian", "german", "greek", "gujarati", "haitian creole", "hausa", "hawaiian", "hebrew", "hindi", "hmong", "hungarian", "icelandic", "igbo", "indonesian", "irish", "italian", "japanese", "javanese", "kannada", "kazakh", "khmer", "korean", "kurdish (kurmanji)", "kyrgyz", "lao", "latin", "latvian", "lithuanian", "luxembourgish", "macedonian", "malagasy", "malay", "malayalam", "maltese", "maori", "marathi", "mongolian", "myanmar (burmese)", "nepali", "norwegian", "nyanja", "pashto", "persian", "polish", "portugese", "punjabi", "romanian", "russian", "samoan", "scottish gaelic", "serbian", "sesotho", "shona", "sindhi", "sinhala", "slovak", "slovenian", "somali", "spanish", "sundanese", "swahili", "swedish", "tajik", "tamil", "telugu", "thai", "turkish", "ukrainian", "urdu", "uzbek", "vietnamese", "welsh", "xhosa", "yiddish", "yoruba", "zulu"];

module.exports.run = async (bot, message, args) => {

  if (!args[0]) {
    return message.channel.send("Please provide a language : <translate [language] [text]");
  } else {

    if (!args[1]) {
      return message.channel.send("Please give me something to translate : <translate [language] [text]");
    } else {

      const transArg = args[0].toLowerCase();
      const translation;

      if (!Langs.includes(transArg)) return message.channel.send("Invalid language !");
      args = args.slice(transArg.length);

      translate(args, {to: transArg}).then(res => {

        const transEmbed = new Discord.RichEmbed()
        .addField(`:flag_fr: Français => ${transArg}`, `${res.text}`)
        .setColor("RANDOM");
        return message.channel.send(transEmbed);

      });
    }
  }
}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tl", "trans"],
    permLevel: 0
  };  

module.exports.help = {
  name: "translate"
}
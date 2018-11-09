const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = (bot, message, args) => {
  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (err) console.log(err);
    if (result === undefined || result.length === 0) {
      message.channel.send("**Please enter a location!**");
      return;
    }
    var current = result[0].current;
    var location = result[0].location;
    var UTC;

    if (location.timezone.startsWith("-"))
      var UTC = `UTC${location.timezone}:00`;
    else var UTC = `UTC+${location.timezone}:00`;

    const weatherEmbed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x00ae86)
      .addBlankField()
      .addField("Timezone 🕒", `${UTC}`, true)
      .addField("Degree Type :thermometer:", `°${location.degreetype}`, true)
      .addBlankField()
      .addField(
        "Temperature :thermometer:",
        `${current.temperature}°${location.degreetype}`,
        true
      )
      .addField(
        "Feels Like :dash:",
        `${current.feelslike}°${location.degreetype}`,
        true
      )
      .addBlankField()
      .addField("Winds :wind_blowing_face:", current.winddisplay, true)
      .addField("Humidity :sweat_drops:", `${current.humidity}%`, true);
    message.channel.send(weatherEmbed);
  });
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "weather"
};

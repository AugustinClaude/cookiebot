//const google = require("google");

module.exports.run = async (bot, message) => {
  const args2 = message.content.split(" ");
  args2.shift();
  message.reply("https://www.google.fr/#q=" + args2.join("%20"));

  /*google.resultsPerPage = 1
    google.protocol = 'https'
    var nextCounter = 0

    google(args, function (err, res) {
        if (err) console.log(err);

        for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        if (link.title == null) {
        return void(0)
        }
        if (link.href == null)    {
        return void(0)
        }
        const gEmbed = new Discord.RichEmbed()
            .setTitle(`💻 Résultats pour la recherche google : **__${args}__**`.split(',').join(' '))
            .setColor('RANDOM')
            .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
            .addField('🛰 Site', link.title)
            .addField('<:ThroughFacePalm:477103077728583692> Description', link.description)
            .addField('🌐 Lien', link.href);

            message.channel.send(gEmbed);
        }

        if (nextCounter < 1) {
        nextCounter += 1
        if (res.next) res.next()
        }

    });*/
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ggl"],
  permLevel: 0
};

module.exports.help = {
  name: "google"
};

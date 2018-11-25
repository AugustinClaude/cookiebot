let index = 0;
module.exports = async bot => {
  await wait(1000);

  bot.log(
    "log",
    ` = ${bot.user.username} est en ligne ! =\n= ${
      bot.users.size
    } utilisateurs =\n= ${bot.channels.size} channels =\n= ${
      bot.guilds.size
    } serveurs :\n - ${bot.guilds
      .array()
      .map(g => g)
      .join("\n - ")}`,
    "Prêt!"
  );

  setInterval(async () => {
    const statuslist = [
      `<help | ${bot.guilds.size} guilds`,
      `<help | ${bot.channels.size} channels`,
      `<help | ${bot.users.size} users`
    ];
    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[index]}`,
          type: "PLAYING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }

    if (index === statuslist.length) return (index = 0);
    else +index;
  }, 3000);
};

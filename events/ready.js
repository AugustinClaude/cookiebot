var colors = require("colors");

module.exports = async bot => {
  await wait(1000);

  const member = bot.users.get("302901933419790347");
  member.send(
    "Une cause non connue m'a fait redémarrer. Je suis maintenant re-opérationnel !"
  );

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

  colors.setTheme({
    silly: "rainbow"
  });

  console.log(
    `_________                __   .__        
    \\_   ___ \\  ____   ____ |  | _|__| ____  
    /    \\  \\/ /  _ \\ /  _ \\|  |/ /  |/ __ \\ 
    \\     \\___(  <_> |  <_> )    <|  \\  ___/ 
     \\______  /\\____/ \\____/|__|_ \\__|\\___  >
            \\/                   \\/       \\/ `.silly
  );

  /*setInterval(async () => {
    const statuslist = [
      `<help | ${bot.guilds.size} guilds`,
      `<help | ${bot.channels.size} channels`,
      `<help | ${bot.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);*/
  try {
    await bot.user.setPresence({
      game: {
        name: "<help",
        type: "PLAYING"
        //url: 'https://www.twitch.tv/spokloo'
      },
      status: "online"
    });
  } catch (error) {
    console.error(error);
  }
};

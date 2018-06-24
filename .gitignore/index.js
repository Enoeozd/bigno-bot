const Discord = require("discord.js");

var bot = new Discord.Client ();

bot.on("ready" , function() {
    bot.user.setGame ("Bigno Bot, b!help");
    console.log("Le bot a bien ete connecte");
});

bot.login ("NDYwMTYyMTM1NTU3NjY4ODY1.DhENrA.zPT2rPwOM5TvU-obf18EszAjr9c");

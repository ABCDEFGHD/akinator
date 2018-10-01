const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("aki!");

bot.login(process.env.TOKEN)

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `Manger du bambou | ${prefix}help | ${bot.guilds.size} serveurs`, type: 0}})
    bot.user.setStatus("dnd");
    console.log("Bot Prêt !");
});

bot.on('message', message => {
    if (message.content.startsWith("test")){
        message.reply("1, 2, 3, c'est bon !");
        console.log('test')
    }

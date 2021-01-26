require('dotenv').config({path: `.env`});


//Set
const Discord = require('discord.js');
const CronJob = require('cron').CronJob;

//Init bot
const bot = new Discord.Client();

//Init logs
const Logs = require('./actions/logs');

//Commands
const ExempleCommand = require('./commands/exemple');

//Actions
const ExempleAction = require('./actions/exemple');

//Get env
let prefix = process.env["BOT_PREFIX"];
let dm = process.env["AUTHORIZED_DM"];  

//On start
bot.on('ready', function () {
    Logs.snap('[SYSTEM] : Start');
    bot.user.setActivity(prefix + 'help').catch();
});

//On message
bot.on('message', function (message) {

    if (message.author.bot) {
        return false;
    }

    if (message.attachments.size > 0) {
        return false;
    }

    if (dm === 'FALSE') {
        if (message.channel.type === 'dm' || message.channel.type === 'group') {
            return false;
        }
    }

    if (message.isMentioned(bot.user)) {
    }

    if (message.content.lastIndexOf(prefix, 0) === 0) {
        let commandUsed = ExempleCommand.parse(message);
    }

    //Hello
    let path = process.env["ACTION_PATH"];
    let fileHello = path + '/' + 'hello' + '.json';

    Logs.snap('[200]index.js : end of script.');

    ExempleAction.action(message);
});

//On error
bot.on('error', function (error) {
    Logs.snap('[ERROR] : ' + error);
});

//Cron tabs
new CronJob('0 0 7 * * *', function () {
    ExempleAction.action(bot);
}, null, true, 'Europe/Paris');

bot.login(process.env["TOKEN"]);
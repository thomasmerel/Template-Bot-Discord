const Command = require('./command');
const Logs = require('../actions/logs');

module.exports = class Exemple extends Command {
    static match(message) {
        return message.content.startsWith(process.env["BOT_PREFIX"] + 'exemple');
    }

    static action(message) {
        let response = 'This is an exemple';
        message.channel.send(response);
        Logs.snap('[CommandExemple] : '+response);
    }
};
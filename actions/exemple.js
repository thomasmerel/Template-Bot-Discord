const Logs = require('../actions/logs');

module.exports = class Exemple {
    static action(message) {

        let response = 'This is an exemple';

        message.channel.send(response);

        Logs.snap('[ActionExemple] : ' + response);

        return false;
    }
};
module.exports = {
    name: 'ping', //Rexullah Komut Örnek
    description: 'Botun pingini kontrol eder.',
    execute(message, args, client) {
        message.channel.send(`Pingim: ${client.ws.ping}ms`);
    },
};

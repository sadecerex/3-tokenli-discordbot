module.exports = {
    name: 'hello', //Rexullah Komut Örneği
    description: 'Kullanıcıya merhaba der.',
    execute(message, args) {
        message.channel.send(`Merhaba, ${message.author.username}!`);
    },
};

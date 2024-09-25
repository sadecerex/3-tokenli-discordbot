module.exports = {
    name: 'server', //Rexullah Komut Örneği
    description: 'Sunucu bilgilerini gösterir.',
    execute(message, args) {
        message.channel.send(`Bu sunucu: ${message.guild.name}\nToplam üye sayısı: ${message.guild.memberCount}`);
    },
};

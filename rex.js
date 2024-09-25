const { Discord, EmbedBuilder, ActionRowBuilder, Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { Rexullah, Rexullahv2, Rexullahv3 } = require('./rexconfig.json');
const path = require('path');
const fs = require('fs');


// Öncelikle En Basit Şekilde Tanımlamalar Yapılarak Kod Yapısını Zorlaştırmadan Bir Proje Yapmaya Çalıştım
// "Bilmemek Değil Öğrenmemek Ayıptır" , Komutları Sadece 1'er Örnek İle Bırakmamın Sebebi Projenin Temel Yapıda Ve Öğretici Olması İçindir.
// Ve Eklemek İstediğim şudur . Bu Altyapıyı Nasıl Kullanacağınıza Siz Karar Vermelisiniz, Priv & Pub & Ekip Farketmeksizin Opsiyonlarınız Sınırsız.
// Hayal Dünyanızda Yolculuk Yapmanızı İstedim.
// Eksik Gördüğünüz veya Hatalı Bir Yer Var İse İletişime Geçmekten Çekinmeyin . - Discord : sadecerex



const clientv1 = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.GuildMessages, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.MessageContent, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.GuildMembers, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
    ],
});

const clientv2 = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.GuildMessages, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex 
        GatewayIntentBits.MessageContent, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.GuildMembers, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
    ],
});

const clientv3 = new Client({
    intents: [
        GatewayIntentBits.Guilds,  // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.GuildMessages, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
        GatewayIntentBits.MessageContent, // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex 
        GatewayIntentBits.GuildMembers,  // Intentlerin Açıklamalarını Bilmiyorsan Dokunma Zaten Gereken Intentler Tanımlı - Rex
    ],
});


clientv1.commands = new Map(); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandsPath = path.join(__dirname, 'rexhash1'); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex

for (const file of commandFiles) { // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const filePath = path.join(commandsPath, file); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const command = require(filePath); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    clientv1.commands.set(command.name, command); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
}


clientv2.commands = new Map(); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandsPath2 = path.join(__dirname, 'rexhash2'); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandFiles2 = fs.readdirSync(commandsPath2).filter(file => file.endsWith('.js')); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex

for (const file2 of commandFiles2) { // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const filePath2 = path.join(commandsPath2, file2); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const command2 = require(filePath2); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    clientv2.commands.set(command2.name, command2); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
}


clientv3.commands = new Map(); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandsPath3 = path.join(__dirname, 'rexhash3'); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
const commandFiles3 = fs.readdirSync(commandsPath3).filter(file => file.endsWith('.js')); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex

for (const file3 of commandFiles3) { // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const filePath3 = path.join(commandsPath3, file3); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    const command3 = require(filePath3); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
    clientv3.commands.set(command3.name, command3); // Clientlere Komutların Tanımlanması - Bilmiyorsan Yine Dokunma - Rex
}


clientv1.once('ready', () => {  // Clientlerin Status(Aktivite) Tanımlamaları - Rexconfig.json Dosyasında Yer Alıyor Her Client İçin Ayrı Tanımlandı...
    console.log(`RexHash V1 giriş yaptı!`);
    clientv1.user.setPresence({
        activities: [{ name: Rexullah.Aktivitev1, type: ActivityType.Watching }],
        status: 'dnd',
    });
});


clientv2.once('ready', () => { // Clientlerin Status(Aktivite) Tanımlamaları - Rexconfig.json Dosyasında Yer Alıyor Her Client İçin Ayrı Tanımlandı...
    console.log(`RexHash V2 giriş yaptı!`);
    clientv2.user.setPresence({
        activities: [{ name: Rexullahv2.Aktivitev2, type: ActivityType.Watching }],
        status: 'dnd',
    });
});


clientv3.once('ready', () => { // Clientlerin Status(Aktivite) Tanımlamaları - Rexconfig.json Dosyasında Yer Alıyor Her Client İçin Ayrı Tanımlandı...
    console.log(`RexHash V3 giriş yaptı!`);
    clientv3.user.setPresence({
        activities: [{ name: Rexullahv3.Aktivitev3, type: ActivityType.Watching }],
        status: 'dnd',
    });
});


clientv1.on('messageCreate', (message) => { // Clientlerin Komutlarınızı Algıladığı Ve Prefix Tanımlandığı Bölüm Değiştirmenizi Tavsiye Etmem - Rex
    if (message.author.bot) return;

    const prefix = Rexullah.Prefix;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = clientv1.commands.get(commandName) || clientv1.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (command) {
        command.execute(message, args, clientv1, prefix);
    }
});


clientv2.on('messageCreate', (message) => { // Clientlerin Komutlarınızı Algıladığı Ve Prefix Tanımlandığı Bölüm Değiştirmenizi Tavsiye Etmem - Rex
    if (message.author.bot) return;

    const prefix2 = Rexullahv2.Prefix;

    if (!message.content.startsWith(prefix2)) return;

    const args2 = message.content.slice(prefix2.length).trim().split(/ +/);
    const commandName2 = args2.shift().toLowerCase();

    const command2 = clientv2.commands.get(commandName2) || clientv2.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName2));

    if (command2) {
        command2.execute(message, args2, clientv2, prefix2);
    }
});


clientv3.on('messageCreate', (message) => { // Clientlerin Komutlarınızı Algıladığı Ve Prefix Tanımlandığı Bölüm Değiştirmenizi Tavsiye Etmem - Rex
    if (message.author.bot) return;

    const prefix3 = Rexullahv3.Prefix;

    if (!message.content.startsWith(prefix3)) return;

    const args3 = message.content.slice(prefix3.length).trim().split(/ +/);
    const commandName3 = args3.shift().toLowerCase();

    const command3 = clientv3.commands.get(commandName3) || clientv3.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName3));

    if (command3) {
        command3.execute(message, args3, clientv3, prefix3);
    }
});


clientv1.login(Rexullah.Token); // TOKENE GİRİŞ - REX
clientv2.login(Rexullahv2.Token); // TOKENE GİRİŞ - REX
clientv3.login(Rexullahv3.Token); // TOKENE GİRİŞ - REX

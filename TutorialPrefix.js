const { Client, Intents } = require('discord.js'); //Подключаем библиотеку discord.js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //создаем переменную client 
let config = require('./Config.json') //Подключаем конфиг
let token = config.token; //Получаем токен в конфиге
let prefix = config.prefix; //Получаем префикс в конфиге
function hasprefix(message, commandprefix) {
    return message.content.lastIndexOf(commandprefix, 0) === 0; // Эта функция нужна для того чтобы узнать есть ли в сообщении наш префикс
}
function getcommand(message, commandprefix) {
    return message.content.split(' ')[0].slice(commandprefix.length); // Эта функция нужна для получения команды
}
client.on('ready', () => {
    console.log(`Bot Started with tag ${client.user.tag}`); //Пишем о том что бот готов к использованию
});
client.on('messageCreate', message => {
    if (message.author.bot) {
        return; //Игнорируем сообщения от бота
    }
    if (hasprefix(message, prefix)) {
        switch (getcommand(message, prefix)) {
            case "ping":
                message.channel.send("pong !");
            case "getuserid":
                let user = message.mentions.members.first(); //получаем пользователя в аргументах команды
                message.channel.send(`Id <@${user.id}> - ${user.id} !`); //выводим его айди
                
        } //Выполняем команду
    } //Проверяем есть ли в сообщении префикс
});
client.login(token);
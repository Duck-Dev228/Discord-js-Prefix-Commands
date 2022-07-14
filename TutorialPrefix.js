const { Client, Intents } = require('discord.js'); //���������� ���������� discord.js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //������� ���������� client 
let config = require('./Config.json') //���������� ������
let token = config.token; //�������� ����� � �������
let prefix = config.prefix; //�������� ������� � �������
function hasprefix(message, commandprefix) {
    return message.content.lastIndexOf(commandprefix, 0) === 0; // ��� ������� ����� ��� ���� ����� ������ ���� �� � ��������� ��� �������
}
function getcommand(message, commandprefix) {
    return message.content.split(' ')[0].slice(commandprefix.length); // ��� ������� ����� ��� ��������� �������
}
client.on('ready', () => {
    console.log(`Bot Started with tag ${client.user.tag}`); //����� � ��� ��� ��� ����� � �������������
});
client.on('messageCreate', message => {
    if (message.author.bot) {
        return; //���������� ��������� �� ����
    }
    if (hasprefix(message, prefix)) {
        switch (getcommand(message, prefix)) {
            case "ping":
                message.channel.send("pong !");
            case "getuserid":
                let user = message.mentions.members.first(); //�������� ������������ � ���������� �������
                message.channel.send(`Id <@${user.id}> - ${user.id} !`); //������� ��� ����
                
        } //��������� �������
    } //��������� ���� �� � ��������� �������
});
client.login(token);
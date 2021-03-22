const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Darth Yalls Discord Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'hi'){
        message.channel.send('Hello!');
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'help'){
        message.channel.send('-play (song) *Plays a song in a voice channel*');
        message.channel.send('-help *Shows this list*');
        message.channel.send('-count *Counts as far as I know how*')
        message.channel.send('-version *Tells what version the bot is in*')
        message.channel.send('More commands coming soon');
    } else if (command === 'bruh'){
        message.channel.send('Bruh')
    } else if (command === 'penis'){
        message.channel.send('lol')
    } else if (command === 'nah'){
        message.channel.send('Yuh')
    } else if (command === 'pog'){
        message.channel.send('Poggers')
    } else if (command === 'count'){
        message.channel.send('1')
        message.channel.send('2')
        message.channel.send('3')
        message.channel.send('4')
        message.channel.send('5')
        message.channel.send('6')
        message.channel.send('7')
        message.channel.send('8')
        message.channel.send('9')
        message.channel.send('10')
        message.channel.send('11')
        message.channel.send('12')
        message.channel.send('13')
        message.channel.send('14')
        message.channel.send('15')
        message.channel.send('16')
        message.channel.send('17')
        message.channel.send('18')
        message.channel.send('19')
        message.channel.send('20')
        message.channel.send('21')
        message.channel.send('22')
        message.channel.send('23')
        message.channel.send('24')
        message.channel.send('25')
        message.channel.send('26')
        message.channel.send('27')
        message.channel.send('28')
        message.channel.send('29')
        message.channel.send('30')
        message.channel.send('31')
        message.channel.send('32')
        message.channel.send('33')
        message.channel.send('34')
        message.channel.send('35')
        message.channel.send('36')
        message.channel.send('37')
        message.channel.send('38')
        message.channel.send('39')
        message.channel.send('40')
        message.channel.send('41')
        message.channel.send('42')
        message.channel.send('43')
        message.channel.send('44')
        message.channel.send('45')
        message.channel.send('46')
        message.channel.send('47')
        message.channel.send('48')
        message.channel.send('49')
        message.channel.send('50')
        message.channel.send('51')
        message.channel.send('52')
        message.channel.send('53')
        message.channel.send('54')
        message.channel.send('55')
        message.channel.send('56')
        message.channel.send('57')
        message.channel.send('58')
        message.channel.send('59')
        message.channel.send('60')
    } else if (command === 'version'){
        message.channel.send('This bot is currently in version 0.2.12')
    }
});

client.login(process.env.token);

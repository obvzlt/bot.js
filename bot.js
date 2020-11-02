const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzcyODY3Njk0MjIyMzc2OTgw.X6A7IQ.4wIV8cW_TMYczyYiv3NTcwhMvNE);//NzcyODY3Njk0MjIyMzc2OTgw.X6A7IQ.4wIV8cW_TMYczyYiv3NTcwhMvNE is the Client Secret

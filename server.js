const TelegramBot = require('node-telegram-bot-api');
const token = '7309854374:AAEZ6l50u1zyvL5V-36kvdsngmadd2Z4cxQ';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.chat.username;
    const messageText = msg.text;
    //console.log({type:'Incoming', msg:msg, entities: msg.entities})
    if (messageText === '/start') {
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [
                        { 
                            text: 'Play in one click', 
                            web_app: { url: `https://game.bitcoinfansclub.com/?userId=${userName}` } 
                        }
                    ],
                    [
                        { 
                            text: 'Go to presale BTCFANS',
                            web_app: { url: 'https://presale.bitcoinfansclub.com' }
                        }
                    ],
                    [
                        { text: 'Subscribe to channel', url: 'https://t.me/bitcoinfansclub' }
                    ]
                ]
            }
        };
        bot.sendMessage(chatId, 'Join the Revolution!!', options);
    }
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = callbackQuery.data;
    const chatId = message.chat.id;

    if (data === 'play') {
        const url = `https://madmonkeygame.vercel.app/?userId=${chatId}`;
        bot.sendMessage(chatId, `Click [here](${url}) to play the game!`, { parse_mode: 'Markdown' });
    }
});


// bot.sendMessage('USER_CHAT_ID', 'Hello, this is a message from your Telegram bot.');
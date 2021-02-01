const Telegraf = require('telegraf')

const bot = new Telegraf('1675749539:AAH46KNMRschhJDMuI5dclpp9FnB0znEaK4')
const helpMessage = `Katakan sesuatu kepada saya\n/start - untuk memulai bot\n/menu - untuk menampilkan list menu`;
bot.command("start", (ctx) => {
    ctx.reply("Halo "+ctx.from.first_name);
    ctx.telegram.sendMessage(ctx.chat.id, "silahlan ketikan command /menu atau /help untuk melihat list menu",
     {
        parse_mode: 'Markdown',
        disable_notification: true //true or false
     }
    )
    console.log(ctx.chat.id);
})
bot.hears('/', (ctx) => {
    ctx.reply(helpMessage);
})
bot.command(['menu','help'],(ctx) => {
    ctx.reply("Halo "+ctx.from.first_name +"👋\n\n┏━━❉ DARK BOT ❉━━━┓\n┣⊱ Username : "+ctx.from.username+"\n┣⊱ ID : "+ctx.from.id+"\n┣⊱ Creator : MrDevils\n┣⊱ Whatsapp : 85939888897\n┣⊱ Github : github.com/adimas999\n┣⊱ IG : adimas_sahadoet\n┣⊱ Owner : MrDevils\n┗━━━━━━━━━━━━━━━━\n┏━━❉ *INFO* ❉━━━┓\n┣⊱ *Dilarang spam bot*\n┗━━━━━━━━━━━━━━━━\n┏━━⊱ *BOT MENU* ⊰━━┓\n┣⊱ /othermenu\n┣⊱ /makermenu\n┗━━━━━━━━━━━━━━━━"),
     {
        parse_mode: 'Markdown',
        disable_notification: true //true or false
     }
     console.log(ctx.chat.id);
})
//silahkan di edit sesuka hati kalian
bot.hears(['Hi','Hallo','Halo'], (ctx) => {
    ctx.reply("Hallo "+ctx.from.username+" ada yang bisa saya bantu?");
})
bot.hears(['Assalamualaikum','Asalamualaikum','Assalamualaikum wr wb','Asalamualaikum wr wb'], (ctx) => {
    ctx.reply("Waalaikumsalam Wr Wb");
})
bot.hears('Bot', (ctx) => {
    ctx.reply("Hallo "+ctx.from.username+"\n\nJika Kamu ingin menggunakan BOT silahkan ketikan command /menu atau /help");
})
bot.hears('Apakabar', (ctx) => {
    ctx.reply("Saya Baik baik saja bagaimana dengan mu?");
})
bot.hears(['Alhamdulilah baik','Baik','Saya baik baik saja'], (ctx) => {
    ctx.reply("Alhamdulilah semoga sehat selalu");
})
//end message
//Bot Settings
const makerMessage = `┏━━⊱ *MAKER MENU* ⊰━━┓\n┣⊱ /nulis <text>\n┣⊱ /textimage <text>\n┗━━━━━━━━━━━━━━━━`
const otherMessage = `┏━━❉ *OTHER MENU* ❉━━━┓\n┣⊱ /kbbi <text>\n┣⊱ /randomquotes\n┣⊱ /artinama <nama>\n┣⊱ /infogempa\n┗━━━━━━━━━━━━━━━━`
//end settings
//list menu
bot.command('othermenu', (ctx) => {
    ctx.reply(otherMessage);
    {
        parse_mode: 'Markdown'
        disable_notification: true //true or false
    }
     console.log(ctx.chat.id);
})
bot.command('makermenu', (ctx) => {
    ctx.reply(makerMessage);
    {
        parse_mode: 'Markdown'
        disable_notification: true //true or false
    }
    console.log(ctx.chat.id);
})
bot.launch()

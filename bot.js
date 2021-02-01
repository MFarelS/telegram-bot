const Telegraf = require('telegraf')

const bot = new Telegraf('1675749539:AAH46KNMRschhJDMuI5dclpp9FnB0znEaK4')
const botName = 'DARK BOT'
const ownerName = 'MrDevils'
bot.command("start", (ctx) => {
    ctx.reply("Halo "+ctx.from.frist_name);
    ctx.telegram.sendMessage(ctx.chat.id, "silahlan ketikan command /menu atau /help untuk melihat list menu",
     {
        parse_mode: 'Markdown',
        disable_notification: true //true or false
     }
    )
    console.log(ctx.chat.id);
})
bot.command(['menu','help'],(ctx) => {
    ctx.reply("Halo "+ctx.from.frist_name +"👋\n\n┏━━❉ DARK BOT ❉━━━┓\n┣⊱ Creator : MrDevils\n┣⊱ Whatsapp : 85939888897\n┣⊱ Github : github.com/adimas999\n┣⊱ IG : adimas_sahadoet\n┣⊱ Owner : MrDevils\n┗━━━━━━━━━━━━━━━━\n┏━━❉ *INFO* ❉━━━┓\n┣⊱ *Dilarang spam bot*\n┗━━━━━━━━━━━━━━━━\n┏━━⊱ *BOT MENU* ⊰━━┓"),
     {
        parse_mode: 'Markdown',
        disable_notification: true //true or false
     }
     console.log(ctx.chat.id);
})

bot.launch()

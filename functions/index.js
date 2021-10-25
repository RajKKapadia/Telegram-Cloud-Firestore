const functions = require("firebase-functions");

const { Telegraf } = require('telegraf');

const TOKEN = 'YOUTAPIKEY';

const bot = new Telegraf(TOKEN, {
    telegram: { webhookReply: true },
});

bot.catch((err, ctx) => {
    functions.logger.error('[Bot] Error', err)
    return ctx.reply(`Ooops, bot encountered an error for ${ctx.updateType}`, err)
});

bot.command('/start', async (ctx) => {

    return ctx.reply('From firebase functions.');
});

bot.on('message', async (ctx) => {

    let chat_id = ctx.message.from.id;
    let text = ctx.message.text;

    return ctx.reply(text);
});

exports.echoBot = functions.https.onRequest(async (request, response) => {
    functions.logger.log('Incoming message', request.body);
    bot.handleUpdate(request.body, response);
});

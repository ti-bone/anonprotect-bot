const { Telegraf } = require("telegraf");
const bot = new Telegraf("your bot token");
const os = require("os");

bot.on("message", async (ctx) => {
    if(ctx.chat.type == "group") return;
    if(ctx.from.id == "136817688") {
        try {
            await ctx.deleteMessage().catch((err) => { 
                console.error(err)
            });

            await bot.telegram.banChatSenderChat(ctx.chat.id, ctx.message.sender_chat.id).catch((err) => {
                console.error(err)
            });
            return;
        } catch(error) {
            console.error(error);
        }
    }
});

bot.launch().then(() => {
    console.log("AnonProtect Bot started sucessfully on: \n" + os.type() + " (" + os.platform() + ") " + os.release());
});

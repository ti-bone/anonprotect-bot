const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("your bot token");
const os = require("os");

bot.on("message", (ctx) => {
    if(ctx.chat.type == "group") return;
    if(ctx.from.id == "777000") {
        try{
            ctx.deleteMessage();
            return;
        }
        catch(error){
            console.error(error);
        }
    };
});

bot.launch();
console.log("AnonProtect Bot started sucessfully on: \n" + os.type() + " (" + os.platform() + ") " + os.release());

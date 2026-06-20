import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { menuKeyboard } from "../toolkit/index.js";

const composer = new Composer<Ctx>();

composer.command("start", async (ctx) => {
  const keyboard = menuKeyboard([
    { text: "Ping", data: "menu:ping" },
  ]);
  await ctx.reply("Welcome! I am ready to help.", { reply_markup: keyboard });
});

composer.callbackQuery("menu:ping", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("pong");
});

export default composer;

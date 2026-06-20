import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { inlineKeyboard, inlineButton } from "../toolkit/index.js";

const composer = new Composer<Ctx>();

composer.command("start", async (ctx) => {
  await ctx.reply("Welcome! I am ready to help.", {
    reply_markup: inlineKeyboard([[inlineButton("Ping", "menu:ping")]]),
  });
});

composer.callbackQuery("menu:ping", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("pong");
});

export default composer;

import { Composer, InlineKeyboard } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard().text("Ping", "menu:ping");
  await ctx.reply("Welcome! I am ready to help.", {
    reply_markup: keyboard,
  });
});

composer.callbackQuery("menu:ping", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("pong");
});

export default composer;
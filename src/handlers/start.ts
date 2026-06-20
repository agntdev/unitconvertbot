import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.command("start", async (ctx) => {
  await ctx.reply(
    "Welcome! I am ready to help.\n\n" +
    "Available commands:\n" +
    "/start - Welcome message\n" +
    "/ping - Ping the bot (e.g. /ping)\n" +
    "/help - Show this help (e.g. /help)\n" +
    "/c2f - Convert Celsius to Fahrenheit (e.g. /c2f 25)\n" +
    "/f2c - Convert Fahrenheit to Celsius (e.g. /f2c 77)\n" +
    "/km2mi - Convert kilometers to miles (e.g. /km2mi 10)",
  );
});

export default composer;

import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

const HELP_TEXT = `Available commands:

/start — Welcome message
/ping — Ping the bot
/help — Show this help
/c2f <celsius> — Convert Celsius to Fahrenheit
/f2c <fahrenheit> — Convert Fahrenheit to Celsius
/km2mi <kilometers> — Convert kilometers to miles

Usage examples:
/c2f 100
/f2c 32
/km2mi 10

Notes on decimal input and rounding:
• All numeric commands accept decimal values (e.g., 36.6, -5.2).
• Results are rounded to 2 decimal places.`;

composer.command("help", async (ctx) => {
  await ctx.reply(HELP_TEXT);
});

export default composer;
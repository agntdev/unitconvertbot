import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.command("c2f", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /c2f <temperature in Celsius>");
    return;
  }
  const celsius = parseFloat(input);
  if (isNaN(celsius)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  const fahrenheit = celsius * 9 / 5 + 32;
  await ctx.reply(fahrenheit.toFixed(2));
});

export default composer;
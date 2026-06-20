import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.command("mi2km", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /mi2km <miles>");
    return;
  }
  const miles = parseFloat(input);
  if (isNaN(miles)) {
    await ctx.reply("Please provide a valid number of miles.");
    return;
  }
  const km = miles / 0.621371;
  const rounded = km.toFixed(2);
  await ctx.reply(`${miles} mi = ${rounded} km`);
});

export default composer;

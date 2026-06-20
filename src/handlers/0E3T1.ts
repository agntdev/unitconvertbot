import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const stack = err instanceof Error ? err.stack : String(err);
    console.error(stack);
    await ctx.reply("An error occurred; please try again");
  }
});

composer.command("m2k", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /m2k <miles>");
    return;
  }
  const miles = parseFloat(input);
  if (isNaN(miles)) {
    await ctx.reply("Please provide a valid number of miles.");
    return;
  }
  const km = miles * 1.60934;
  await ctx.reply(km.toFixed(2));
});

export default composer;
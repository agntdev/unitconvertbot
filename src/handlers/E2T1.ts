import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { parseNumber } from "../utils/parseNumber.js";

const composer = new Composer<Ctx>();

composer.command("parsenumber", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /parsenumber <number>");
    return;
  }
  try {
    const result = parseNumber(input);
    await ctx.reply(result.toFixed(2));
  } catch {
    await ctx.reply("Please provide a valid number.");
  }
});

export default composer;
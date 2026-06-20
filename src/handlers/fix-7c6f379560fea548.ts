import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { parseNumber } from "../utils/parseNumber.js";
import { roundTo2 } from "../utils/conversions.js";

const composer = new Composer<Ctx>();

composer.command("num", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /num <number>");
    return;
  }
  try {
    const value = parseNumber(input);
    await ctx.reply(roundTo2(value));
  } catch {
    await ctx.reply("Please provide a valid number.");
  }
});

export default composer;
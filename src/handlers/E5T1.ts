import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { milesToKilometers, roundTo2 } from "../utils/conversions.js";

const composer = new Composer<Ctx>();

composer.command("m2k", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /m2k <distance in miles>");
    return;
  }
  const miles = parseFloat(input);
  if (isNaN(miles)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  const km = milesToKilometers(miles);
  await ctx.reply(roundTo2(km));
});

composer.command("round", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /round <number>");
    return;
  }
  const value = parseFloat(input);
  if (isNaN(value)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  await ctx.reply(roundTo2(value));
});

export default composer;
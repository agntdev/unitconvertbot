import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const KM_TO_MI = 0.621371;

const composer = new Composer<Ctx>();

composer.command("km2mi", async (ctx) => {
  const text = ctx.message?.text ?? "";
  const parts = text.trim().split(/\s+/);

  if (parts.length < 2) {
    await ctx.reply("Usage: /km2mi <kilometers>");
    return;
  }

  const input = parts[1];
  const km = Number.parseFloat(input);

  if (Number.isNaN(km) || input.trim() === "") {
    await ctx.reply("Please provide a valid number of kilometers.");
    return;
  }

  const mi = km * KM_TO_MI;
  const kmStr = km.toFixed(2);
  const miStr = mi.toFixed(2);

  await ctx.reply(`${kmStr} km = ${miStr} mi`);
});

export default composer;
import { Composer } from "grammy";
import type { Ctx } from "../bot.js";

const composer = new Composer<Ctx>();

composer.command("f2c", async (ctx) => {
  const input = ctx.match?.toString().trim();
  if (!input) {
    await ctx.reply("Usage: /f2c <temperature in Fahrenheit>");
    return;
  }
  const f = Number.parseFloat(input);
  if (Number.isNaN(f)) {
    await ctx.reply("Usage: /f2c <temperature in Fahrenheit>");
    return;
  }
  const c = ((f - 32) * 5) / 9;
  const rounded = c.toFixed(2);
  await ctx.reply(`<i>${f}°F</i> = <b>${rounded}°C</b>`, {
    parse_mode: "HTML",
  });
});

export default composer;

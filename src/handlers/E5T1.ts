import { Composer } from "grammy";
import type { Ctx } from "../bot.js";
import { celsiusToFahrenheit, fahrenheitToCelsius, kilometersToMiles, milesToKilometers, roundTo2 } from "../utils/conversions.js";

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

composer.command("c2f", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /c2f <celsius>");
    return;
  }
  const value = parseFloat(input);
  if (isNaN(value)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  await ctx.reply(roundTo2(celsiusToFahrenheit(value)));
});

composer.command("f2c", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /f2c <fahrenheit>");
    return;
  }
  const value = parseFloat(input);
  if (isNaN(value)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  await ctx.reply(roundTo2(fahrenheitToCelsius(value)));
});

composer.command("km2mi", async (ctx) => {
  const input = ctx.match.trim();
  if (!input) {
    await ctx.reply("Usage: /km2mi <kilometers>");
    return;
  }
  const value = parseFloat(input);
  if (isNaN(value)) {
    await ctx.reply("Please provide a valid number.");
    return;
  }
  await ctx.reply(roundTo2(kilometersToMiles(value)));
});

export default composer;
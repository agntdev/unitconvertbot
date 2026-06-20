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

export default composer;
# UnitConvertBot — Refined brief

## Summary
A minimal, stateless Telegram bot that converts units. Built in TypeScript using grammY. No database, no storage, no auth, no payments. All commands are handled in per-command modules under src/handlers/.

## Audience
Developer(s) implementing and maintaining the bot; end users on Telegram who need quick unit conversions (C↔F, km↔mi).

## Core features
- Commands
  - /start — welcome + command list
  - /help — list commands and short usage examples
  - /c2f <celsius> — convert Celsius to Fahrenheit
  - /f2c <fahrenheit> — convert Fahrenheit to Celsius
  - /km2mi <km> — convert kilometers to miles
  - /mi2km <miles> — convert miles to kilometers
- Each conversion returns the converted value rounded to 2 decimals.
- If the provided value is not a number, reply with a short usage hint.

## Core entities
- Telegram user (only as message sender; no persistence)
- Command handler modules (src/handlers/*.ts)
- Conversion functions (internal util functions)

## Integrations & notification targets
- Telegram Bot API (via grammY)
- Environment variable: TELEGRAM_TOKEN (required)
- Default runtime: long polling (getUpdates)
- Optional: Dockerfile and simple process manager for hosting (documented but not required)

There are no external notification targets (no email, no Slack, etc.).

## Interaction flows (concrete)
- /start
  - Reply: short welcome and enumerated command list with short examples, e.g.:
    "Welcome! Commands:\n/c2f <celsius> — e.g. /c2f 100\n/f2c <fahrenheit> — e.g. /f2c 212\n/km2mi <km> — e.g. /km2mi 5\n/mi2km <miles> — e.g. /mi2km 3.1\n/help — more info"
- /help
  - Reply: same command list plus note that inputs accept decimals (dot or comma) and that replies are rounded to 2 decimals.
- Conversion commands (/c2f, /f2c, /km2mi, /mi2km)
  - Parse the text after the command: take the first whitespace-separated token after the command.
  - Accept decimal separators: both dot (.) and comma (,) — replace comma with dot before parsing.
  - Use parseFloat and reject inputs that result in NaN.
  - If invalid: reply with a concise usage hint, for example: "Usage: /c2f <celsius> — e.g. /c2f 100"
  - If valid: compute conversion, round to 2 decimals, and reply with formatted answer and units. Examples:
    - /c2f 100 -> "100 °C = 212.00 °F"
    - /km2mi 5 -> "5 km = 3.11 mi"

Formulas:
- Celsius -> Fahrenheit: F = C * 9/5 + 32
- Fahrenheit -> Celsius: C = (F - 32) * 5/9
- Kilometers -> Miles: mi = km * 0.621371
- Miles -> Kilometers: km = mi / 0.621371

Rounding: round to 2 decimal places using a reliable method (Number((value).toFixed(2))).

## Persistence
- None. The bot is fully stateless: do not write files or use databases; do not cache user state.

## Payments
- None.

## Non-goals
- No user accounts, authentication, or message history beyond Telegram’s
- No database or file storage
- No payments or premium features
- No conversational multi-turn flows or context-dependent conversions
- No support for extended unit lists (temperature and distance only)
- No inline queries, callback buttons, or webhooks (default uses polling)

## Project structure (recommended)
- package.json, tsconfig.json, Dockerfile (optional)
- src/
  - bot.ts (startup: load token, set commands, start polling, register handlers)
  - handlers/
    - start.ts
    - help.ts
    - c2f.ts
    - f2c.ts
    - km2mi.ts
    - mi2km.ts
  - utils/
    - parseNumber.ts (normalize comma -> dot, parseFloat, validation)
    - conversions.ts (conversion functions and rounding helper)

Each handler exports a grammY-compatible function: export default async (ctx) => { ... }.
Register handlers in bot.ts with bot.command('c2f', handlers.c2f) etc.

## Error handling & logging
- Each handler wraps processing in try/catch. On unexpected errors, reply with a brief generic message ("An error occurred; please try again") and log stack to console.
- Validate inputs strictly (only first token after command is used). If extra tokens are present, ignore them.

## Example short messages
- Valid reply: "100 °C = 212.00 °F"
- Invalid usage hint: "Usage: /c2f <celsius> — e.g. /c2f 100"

## Assumptions & defaults
- Uses polling (getUpdates) by default — simpler to run and requires no external endpoint.
- Accepts only the first token after the command as the numeric input — keeps parsing simple and predictable.
- Accepts comma or dot as decimal separator (comma is converted to dot before parsing) — improves usability across locales.
- Rounds results to 2 decimals using toFixed(2) and returns as formatted string — matches requirement and avoids floating noise.
- Environment variable TELEGRAM_TOKEN is required to run the bot — standard for Telegram bots.
- Default error reply is a generic short notice and console logging for developers — keeps user experience clean while aiding debugging.


Implementing from this brief yields a production-ready, minimal, stateless UnitConvertBot using TypeScript and grammY with per-command handler modules.
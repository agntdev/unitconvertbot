export function parseNumber(input: string): number {
  const normalized = input.trim().replace(/,/g, ".");
  const firstToken = normalized.split(/\s+/)[0];
  if (!firstToken) {
    throw new Error("No number provided");
  }
  const num = Number(firstToken);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  return num;
}
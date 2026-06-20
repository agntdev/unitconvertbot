export function parseNumber(input: string): number {
  const trimmed = input.trim();
  const firstToken = trimmed.split(/\s+/)[0];
  if (!firstToken) {
    throw new Error("No number provided");
  }

  let normalized: string;
  if (firstToken.includes(".")) {
    normalized = firstToken.replace(/,/g, "");
  } else if (firstToken.includes(",")) {
    const lastCommaIdx = firstToken.lastIndexOf(",");
    const before = firstToken.slice(0, lastCommaIdx).replace(/,/g, "");
    const after = firstToken.slice(lastCommaIdx + 1);
    normalized = before + "." + after;
  } else {
    normalized = firstToken;
  }

  const num = Number(normalized);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  return num;
}
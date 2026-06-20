export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function kilometersToMiles(km: number): number {
  return km * 0.621371;
}

export function milesToKilometers(miles: number): number {
  return miles * 1.609344;
}

export function roundTo2(value: number): string {
  return value.toFixed(2);
}
/**
 * Doubles each character in a given string.
 * @param str - The input string.
 * @returns The string with each character doubled.
 */
export function doubleChar(str: string): string {
  const res: string = str
    .split("")
    .map((char) => char + char)
    .join("")

  return res // Placeholder return statement
}

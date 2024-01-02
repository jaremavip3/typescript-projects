"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = void 0;
/**
 * Doubles each character in a given string.
 * @param str - The input string.
 * @returns The string with each character doubled.
 */
function doubleChar(str) {
    const res = str
        .split("")
        .map((char) => char + char)
        .join("");
    return res; // Placeholder return statement
}
exports.doubleChar = doubleChar;
//# sourceMappingURL=double-char.js.map
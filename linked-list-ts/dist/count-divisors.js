"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors_current = exports.divisors_optimized = void 0;
function divisors_optimized(n) {
    const squareRoot = Math.sqrt(n); //finding the wall of checkable numbers for the divisor
    //let arr: number[] = [] // create an empty array to store the divisors
    //arr.push(1) // add 1 to the array
    let result = 1;
    for (let i = 2; i <= squareRoot; i++) {
        let exponent = 0;
        // loop through the numbers from 2 to the square root of the number
        if (n % i === 0) {
            //arr.push(i) // add the divisor to the array
            while (n % i === 0) {
                n /= i;
                exponent++; // Збільште експонент при кожному знайденому множнику
            }
            result = result * (exponent + 1);
        }
    }
    if (n > 1) {
        //arr.push(n)
        result *= 2; // Додаємо простий дільник, якщо n - просте число
    }
    return result; // return the length of the array
}
exports.divisors_optimized = divisors_optimized;
function divisors_current(n) {
    let steps = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0)
            steps++;
    }
    return steps;
}
exports.divisors_current = divisors_current;
//# sourceMappingURL=count-divisors.js.map
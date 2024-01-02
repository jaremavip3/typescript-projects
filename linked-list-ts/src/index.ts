import {divisors_optimized, divisors_current} from "./count-divisors"

const numberToCheck = 100000000

// Вимірюємо час для першого алгоритму
console.time("Algorithm 1")
const result1 = divisors_optimized(numberToCheck)
console.log(result1) // Виводимо результат один раз перед вимірюванням часу
console.timeEnd("Algorithm 1")

// Вимірюємо час для другого алгоритму
console.time("Algorithm 2")
const result2 = divisors_current(numberToCheck)
console.log(result2) // Виводимо результат один раз перед вимірюванням часу
console.timeEnd("Algorithm 2")

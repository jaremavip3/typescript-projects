export function divisors_optimized(n: number) {
  const squareRoot = Math.sqrt(n) //finding the wall of checkable numbers for the divisor
  let result = 1
  for (let i = 2; i <= squareRoot; i++) {
    let exponent = 0
    // loop through the numbers from 2 to the square root of the number
    if (n % i === 0) {
      //arr.push(i) // add the divisor to the array
      while (n % i === 0) {
        n /= i
        exponent++ // Збільште експонент при кожному знайденому множнику
      }
      result = result * (exponent + 1)
    }
  }
  if (n > 1) {
    result *= 2 // Додаємо простий дільник, якщо n - просте число
  }
  return result // return the length of the array
}

export function divisors_current(n: number) {
  //second algorith to try.
  let steps = 0

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) steps++
  }

  return steps
}

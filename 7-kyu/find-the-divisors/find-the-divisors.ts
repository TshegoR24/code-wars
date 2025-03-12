export function divisors(integer: number): number[] | string {
  if (integer <= 1) {
    throw new Error("Input must be greater than 1");
  }
​
  const divisors: number[] = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }
​
  return divisors.length > 0 ? divisors : `${integer} is prime`
}
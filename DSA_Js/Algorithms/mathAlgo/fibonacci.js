function fibonacci (n) {
  const fib = [0, 1,]
  for(let i=2; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(5))
console.log(fibonacci(6))

Big-O Guide
  Calculation not dependent on input size O(1)
Loop -> O(n)
nested loops - O(n^2)
Input Size reduce to half - O(logn)

const prime = (n) => {
  if(n<=1){
    return 0;
  }
  for(let i=2; i< n/2; i++){
    if(n%i === 0){
      return 0;
    }
  }
  return 1;
}
console.log(prime(5))
console.log(prime(1))
console.log(prime(6))
console.log(prime(19))

Big-O -> O(n)

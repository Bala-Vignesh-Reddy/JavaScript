function powerof2(n) {
  if(n<1){
    return false;
  }
  while (n>1){
    if(n%2 != 0){
      return false;
    }
    n = n/2;
  }
  return true;
}

console.log(powerof2(2));
console.log(powerof2(9));
console.log(powerof2(7));
console.log(powerof2(8));
console.log(powerof2(6));

Big-O -> O(logn)



//Best solution for this problem
function isPowerof2BitWise(n) {
  if(n<1){
    return false
  }
  return (n & (n-1)) === 0
}
Big-O -> O(1)


function recursionFibo(n) {
  if(n<2){
    return n
  }
  return recursionFibo(n-1) + recursionFibo(n-2)
}
console.log(recursionFibo(5));

Big-O -> O(n)

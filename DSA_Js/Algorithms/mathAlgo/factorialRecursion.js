function recurFact(n) {
  if(n === 1){
    return 1;
  }
  return n * recurFact(n-1);
}

console.log(recurFact(5));

// Big-O -> O(n)


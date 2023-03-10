 //Time complexity - Amount of time taken by an algorithm to run, as a function of input size
 
//Space Complexity - Amount of memory taken by an algorithm to run, as a function of input size


// Asymptotic notations
// 1. Big-O notation - worst cas complexity
// 2. Omega notation - best case complexity
//3. Theta notaion - Average case complexity

function summation(n) {
   let sum = 0;
   for(let i = 1; i <= n; i++){
     sum+=i;
   }
   return sum;
}

let ans = summation(5);
console.log(ans);

// Big-O notation for above code O(n) -> linear 


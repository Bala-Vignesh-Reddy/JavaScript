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

 Big-O notation for above code O(n) -> linear used for space
 O(1) -> constant  used in space 
 O(n^2) -> quadratic
 O(n^3) -> cubic
 O(logn) -> logarithmic used in space 



Objects - Big-O 
Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)

Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)


Array - Big-O 
 Insert/ remove at end -O(1)
 Insert/remove at beginning - O(n)
 Access - O(1)
 Search -O(n)
 Push/pop - O(1)
 Shift/unshift/concat/slice/splice - O(n)
 forEach/map/filter/reduce - O(n)








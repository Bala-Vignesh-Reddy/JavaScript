// Set
// A set is a DS that can hold a collection of values. The values however must be unique
// Set can contain a mix of different data types.
// Sets are dynamically sized.
// Sets do not maintain an insertion order
// Sets are iterables. They can be used with a for of loop

//Sets vs Array
// Array can contain duplicate values where as set cannot
// Insertion order is maintained in array but it is not the case in set 
// Searching and deleting an element in set is faster compared to array


const set = new Set([1, 2, 3])
set.add(4)
console.log(set.has(4)) // tells whether the item is present

for(const item of set) {
  console.log(item)
}

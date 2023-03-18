const arr = [1, 3, 4, 'Hello'];
arr.push('bye') // to add item at last
arr.unshift(0) // to add in beginning

arr.pop() // to remove last element
arr.shift() // to remove first element


// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// The concat() method does not change the existing arrays. It always returns a new array.  

// The Array.map() method allows you to iterate over an array and modify its elements using a callback function

// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


for(const item of arr){
    console.log(item);
}

// Array Big-O time complexity 
// Insert/ remove from end and beginning - O(n)
// Access - O(1)
// Search/ Shift/ unshift/ concat/ slice/ splice - O(n)
// Push/ pop - O(1)
// forEach / map/ filter/ reduce - O(n)
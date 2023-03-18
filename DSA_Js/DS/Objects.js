const object = {
    name: 'John',
    age: 20,
    sayMyName : function() {
        console.log(this.name)
    }
}

console.log(object.name);
console.log(object['age']);

object.timepass = 'coding'

delete object.timepass

console.log(object);
object.sayMyName()

// it also have object.keys() .values() and entries() which return the objects

// Object Big-O time complexity
// Insert / Remove/ Access - O(1)
// Search / object.keys()/ .values() / .entries() - O(n)
/*
Object Oriented Programming
In programming we often take something and then extenc it.
eg. we might want to create a user object and "admin" and "guest" will be slightly modified variants of it.

Prototype
Js objects have a special property called prototype is either null or references another object

When we try to read a property from a prototype and its missing, Js automatically takes it from the prototype. This is
called "prototype inheritance"

Setting Prototype
We can set prototype by setting __proto__ 


Classes and Objects
In oops a class is an extensible program-code template for creating objects, providing initial values for state(member variable)
and implementation of behaviour(member functions)

The basic syntax for waiting a class is:

class Myclass {
    //class methods
    construtor() {...}
    method1() {...}
    method2() {...}
}
we can then use new Myclass() to create a new object with all the listed methods

The constructor method is called automatically by new, so we can initialize the object there.

this. property can be used to assign value to any new variable

class RailwayForm{
    constructor(){
        console.log("constructor called")
    }
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert("This form is cancelled")
    }
}

let a = new RailwayForm()
let b = new RailwayForm()
a.submit()
b.submit()
a.cancel()

Class Inheritance
It is a way for one class to extend another class. This is done by using the extends keyword.

->extends keyword is used to extend another class 
class child extends parent

Method overriding
If we create our own implementation of run, it will not be taken from the Animal class. This is called method overriding

Super keyword
When we override a method, we dont want the method of the previous class to go in vain.
We can execute it using super keyword.
super(a,b) -> call parent constructor

constructor overriding
is bit tricky if we don't write any constructor in child then javascript engine automatically 
crete constructor with super() in child
her super() is must

we can also use super.method() in a child method to call parent method

Static Method
they are used to implement functions that belong to a class as whole and not to any particulat object

Getters and Setters
class may include getters and setters to get and set the computed properties

class person{
    ...
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}

first the name property is changed to _name to avoid the name collision with the getter and setter. 
Then the getter uses the ger keyword as shown above

instanceof operator
The instance operator allows to check whether an object belongs to certain class

<obj>instanceof<class>

It returns true if obj belongs to the class or any other class inheriting from it.
*/
/*
Children of an element
Direct as well as deeply nested elements of an element are called its children.
/

Child node -> Elements that are direct children. 
eg. head and body are children of html

Descendant nodes -> All nested elements, children their children and so on.

element.firstChild -> first child element
element.lastChild -> last child element
element.childNodes -> All child nodes


There is a method element.haschildNodes() to check whether there are any child nodes or not.

Note: Child nodes looks like an array. But it's not an array but a collection.

we can use Array.from(collection) to convert it into Array

let arr = Array.from(document.body.childNodes)


Notes on DOM collection
->They are read only
->They are live element.childNodes variable(reference) will automatically upadate if childNodes 
of element is changed.
->They are iteral using for.. of loop


Parents and Siblings of an element:
Sibling are nodes that are children of same parent  


Elements only navigation:
Sometimes, we don't want tezt or comment nodes. So, we will use 
document.firstElementChild ->First element child node
document.lastElementChild ->last element child node
document.previousElementSibling ->Previous sibling which is an element
document.nextElementSibling ->next   sibling which is an element

*/

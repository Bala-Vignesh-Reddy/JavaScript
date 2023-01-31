/*
Searching the DOM
DOM navigation properties are helpdul when the elements are close to each other. If they are not close to each other, 
we have some more methods to search the DOM.

document.getElementById -> This methos is used to get the element with a given "id" attribute.

eg.
let span = document.getElementById('span')
span.style.color = "red"

document.querySelectorAll -> Return all elements inside an element matching the given CSS selector

document.querySelector -> Returns the first element for the given CSS selector. A efficient version of elem.querySelectorAll(CSS)[0]

document.getElementsByTagName -> Returns elements with the given tag name. 

document.getElementsByClassName -> Returns elements that have the given CSS class

document.getElementsByName -> Searches elements by the name attribute




Matches, closest and contains methods
these are 3 imp methods to seach the ODM

elem.matches(CSS) -> To check if elemene matches the given CSS selector

elem.closest(CSS) -> To look for the nearest ancestor that matches the given CSS-selector. The elem itseld is also checked

elem.Contains(elemB) -> Returns true if elemB is inside elemA(a descendant of elemA) or when elemA == elemB
 
*/
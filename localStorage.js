/*
LocalStorage
It is a web storage object which are not sent to server with each request.
This data survives a full pafe refresh and even a full browser restart.

This can be seen from the inspect-> applications -> local storage

These are the methods provided by local storage
1. setItem(key, value) ->store key/value pair
2. getItem(key) -> get the value by key
3. removeItem(key) -> remove the key with its value
4. clear() -> delete everything
5. key(index) -> get the key on a given position
6. length -> the number of stored items

we can get and set values like an object

let storage.one = 1
alert(localStorage.one)
delete localStorage.one

Important Note
1. Both key and value must be strings
2. We can use the two JSON methods to store objects in local Storage

JSON.stringify(object) ->this converts object to JSON strings
JSON.parse(string) -> this converts string to objects(must be a valid JSON)


Session Storage
used less often than localStorage. Properties and methods are same as localStorage but:
1. The seesionStorage exists only within the current browser tab. Another tab with page will have a different storage
2. The data survives pafe refresh, but not closing/opening the tab.

Storage Event
when the data gets updated in localStorage or sessionStorage, storage event triggers with these properties:
1. key -> The key
2. oldValue -> Previous value
3. newValue -> New value
4. url -> Page URL
5. StorageArea -> local or sessionStorage

We can listen the onStorage event of window which is triggered when updates are made to the same storage from other documents.
*/
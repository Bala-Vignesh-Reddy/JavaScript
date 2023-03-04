/*
What is Js?
1. Js is a single threaded, non blocking, asynchronous concurrent language
2. It has call stack, an event loop and a callback queue + other APIs
3. V8 is the Js runtime which has a call stack and a heap
4. The heap is used for memory allocation and the stack holds the execution context.
5. DOM, seTimeout, XML HttpRequest don't exist in v8 source code


Asynchronous Callbacks
1. Sometimes the Js code can take a lot of time and this can block the page re render
2. Js has asynchronous callbacks for non blocking behaviour
3. Js runtime can do only one thing at a time
4. Browser gives us other things which work along with the runtime like Web APIs.


Task Queue
1. Js can do only one thing at a time
2. The rest are queued to the task queue waiting to be executed
3. When we run setTimeout, webapis will run a timer and push the function provided to setTimeout to the ask queue once the timer ends
4. These tasks will be pushed to the stack where they can executed

The Event Loop
1. Js has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks
2. The event loop pushes the tasks from the task queue to the call stack
3. setTimeout(func1, 0) can be used to defer a function until all the pending tasks have been executed
4. We can see how these things work in action by visiting

*/

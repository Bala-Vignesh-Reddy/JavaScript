/*
Network requests and storing data

Fetch API
it is used to get data over the network

let promise = fetch(url, [options])
without options, a get request is sent

promise.then((response)=>{
    reutrn response.json()
}).then((response)=>{
    console.log(response)
})

getting a resonse is a 2-stage process
1. An object of response class containing "status" and "ok" properties
status - the http status code
or - boolean, true if the http status code is 200-299

2. after that we need to call another method to access the body in different formats
response.text() -> read and return the text
response.json() -> parse the reponse as json

Javascript Cookies
Cookies are small strings of data stored directly in the browser.
In Js, document.cookie provides access to cookies.

Cookies are set by a web server using the set-cookie HTTP-header. Next time when the request is sent to the 
same domain, the browser senda the cookie using the cookie HTTP-header. 
That way the server knows who sent the request 

we can access cookies using document.cookie property


Cookie Options
Cookie have several options which can be provided after key = value to a set call like this:
document.cookie = "user = bhr; path=/a; expired = Tue, 29 January 2023 3:18:22 GMT"
path option makes the cookie visible at /a, expires sets the cookie expiration time

Note:
1. The name=value pair, after excodeURIcomponent, should not exceed 4kb
2. Total no of cookies per domain is limited to around 20. (exact number is browser dependent)
*/
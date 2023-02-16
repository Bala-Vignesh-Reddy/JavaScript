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
*/
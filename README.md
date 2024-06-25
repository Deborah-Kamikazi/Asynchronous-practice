# Asynchronous-practice
### Q1
```
Write a JavaScript function that fetches data 
from multiple APIs concurrently and returns a combined result using Promises
```
### Q2
```
 Create a function called `createAlarm` that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds.The function should return a promise that resolves with the wake-up message (e.g.Wake up person) but if the delay is less than 2 seconds,the promise should be immediately rejected with an error message stating **Delay is not sufficient**
```
### Q3
```
Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.
```
### Q4
```
Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.function myFetch(){ //... your code here
}
myFetch('https://my-random-api.com/data')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));Bonus points (optional)
Make your fetch function perform other request methods like POST or receive request options.
```
### Q5
```
Write a JavaScript function that fetches data from 
an API and retries the request a specified number of times if it fails.
```
### Q6
```
Write a function that takes a URL and fetches
data from that URL but aborts when the request takes more than 10ms
```
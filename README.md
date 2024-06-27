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
### Q7
```
Suppose you have a web page that sends multiple fetch requests to different URLs simultaneously. Implement a scenario where clicking a "Cancel All" button aborts all ongoing fetch requests using AbortController. How would you structure your code to handle this situation
```
### Q8
```
Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
```
### Q9
```
 Write a JavaScript function that fetches data from an API and 
 retries the request a specified number of times if it fails.
```
### Q10
```
Write a JavaScript function `fetchToDo` that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.
```
### Q11
```
 Extend the `fetchToDo` function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.
```
### Q12
```
1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos concurrently from the provided API endpoints and combine them based on the `userId`. The function should return a promise that resolves with the combined data.
- Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
- Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos) The returned promise should resolve into an array of users, where each user object has a new key `todos`. This key should contain an array of todos that belong to the user, determined by matching the `userId` of the todo with the `id` of the user. User objects may look like
```
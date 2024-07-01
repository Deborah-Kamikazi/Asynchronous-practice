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
### Q13
```
1. You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.

 **Here are the requirements:**

- Use the fetch API to get the country details from https://restcountries.com/v3.1/name/{countryName}.
- Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.
- The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
- Display the country's name, capital city, and current temperature in the console.

**Example:**

If the user searches for "France", your application should:

- Fetch country details from https://restcountries.com/v3.1/name/France.
- Extract the capital city and its coordinates (latitude and longitude).
- Fetch the current weather for the capital city from the weather API.

**Display the results in the console as follows:**
Country: France
Capital: Paris
Current Temperature: 18°C
```
### Q14
```
Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped.
```
### Q15
```
 Use the `async/await` syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose `Country` is equal to `"UNITED STATES (USA)"`
 The API endpoint you should use is: [`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`](https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2)
```

### Q16
```
1. Implement a function `performFastAsync()` that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first. 

The function will accept two parameters: the URL of the API endpoint to send a request to and the number of seconds (in milliseconds) to delay the timer.

The desired behavior involves two possible outcomes:
- If the request successfully completes before the timer runs out, the function should cancel the timer and return a promise that resolves with the data obtained from the request.

- if the timer expires before the request finishes, the function should cancel the ongoing request and return a promise that resolves with an empty array.

// performFastAsync code here ...

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
.then((data) => {
	console.log(data)
})  

performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
.then((data) => {
	console.log(data)
})

```
### Q17
```

 Write a function that uses `setTimeout` to log "Hello, World!" to the console after 2 seconds.

```
### Q18
```
 Create a function that takes a callback and executes it after 3 seconds using `setTimeout`.
```
### Q19 
```
 Using `setInterval`, write a function that logs "Tick" to the console every second.
```
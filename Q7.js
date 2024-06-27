// Suppose you have a web page that sends multiple fetch requests to different URLs
// simultaneously. Implement a scenario where clicking a "Cancel All" button aborts
//  all ongoing fetch requests
// using AbortController. How would you structure your code to handle this situation

const controller = new AbortController();
const signal = controller.signal;

async function stopping() {
  try {
    const p1 = await fetch("https://jsonplaceholder.typicode.com/todos/", {
      signal,
    });
    const data1 = await p1.json();
    const p2 = await fetch("https://reqres.in/api/users", { signal });
    const data2 = await p2.json();
    const final = await Promise.all([data1, data2]);
    return final;
  } catch (error) {
    console.log("reference error", error);
  }
}

setTimeout(() => {
  stopping().then((data) => console.log("data", data));
}, 100);

const button = document.getElementById("abort");

button.addEventListener("click", () => {
  controller.abort();
  console.log("done");
});

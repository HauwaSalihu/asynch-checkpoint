//iterating async await
// Write an async function iterateWithAsyncAwait that takes an array of values and logs
//each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(arr) {
  for (let x of arr) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(x);
  }
}

iterateWithAsyncAwait([67, 90, 89, 3, 2, 4]);
//Awaiting a Call: Create an async function awaitCall that simulates fetching data
//from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
  await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => console.log(data.json()))
    .catch((error) => {
      console.log("an error occureed while fetching your data");
      console.log(error);
    });
}

awaitCall();

//parallel fetch cals using promis.all
// Write a function parallelCalls that takes an array of URLs
//and fetches data from each URL concurrently using Promise.all().
//Log the responses once all requests are complete.
function parallelCalls(urls) {
  const result = Promise.all(
    urls.map(async (item) => {
      const data = await fetch(item);
      const response = await data.json();
      return response;
    })
  );

  return result;
}

console.log(
  parallelCalls([
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/users",
  ])
);

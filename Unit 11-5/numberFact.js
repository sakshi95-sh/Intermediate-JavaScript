

let url = 'http://numbersapi.com/42?json'
let favtNum = 6;
const num = [3, 5, 3, 7, 30, 42];
let multipleUrl = `http://numbersapi.com/${num.join(',')}?json`
let favtNumUrl = `http://numbersapi.com/${favtNum}?json`



//Task 1: Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details. 

fetch(url)
  .then(response => response.json())
  .then(json => console.log('TASK 1',json))


//Task 2:Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
fetch(multipleUrl)
  .then(response => response.json())
  .then(json => console.log('TASK 2',json));

//Task 3:Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
for (let i = 1; i <= 4; i++) {
  fetch(favtNumUrl)
    .then(response => response.json())
    .then(json =>  console.log('TASK 3'+ ' Itreation', i,json) )
  }

//Using Async and wait
  async function task1() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('THIS IS VIA ASYNC/AWAIT TASK:1',data);
    }
    catch (error) {
      console.error("Error fetching data:",error)
    }
  }
task1();

//Task:2
async function task2() {
  try{
    let response=await fetch(multipleUrl)
    let data=await response.json()
    console.log('THIS IS VIA ASYNC/AWAIT TASK:2', data);  
  }
  catch {
    console.error("Error fetching data:",error)
  }
}

task2();
//Task 3
async function task3() {
  try {
    for (let i = 1; i <= 4; i++) {
      let response = await fetch(favtNumUrl);
      let data = await response.json();
      console.log('THIS IS VIA ASYNC/AWAIT TASK:3', data);  
    }
  }
catch (error) {
    console.error("Error fetching data:",error)
    }
}
task3();


//Task:3










 
let api = 'https://jsonplaceholder.typicode.com/posts/';
let idApi= 'https://jsonplaceholder.typicode.com/posts/4'
fetch(api)
  .then(
    response => response.json(),
  ).then(
    json => console.log(json),
).catch(
    error => console.log(error),
);

let getUser = new Promise(function (resolve, reject) {
  const user = {
    name: 'John Cena',
    id: 134,
  };
  resolve(user);
}).then(user => {
  if(!user.name){throw new Error("Property missing")}
  console.log(user.name);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("New York")
    }, 1000);
  }).then(address => {
    console.log(address);
  }

  )
}).catch(
  reject => { console.error('There is an issue',reject) }
);

//Step 1
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

//Step 2

async function task2() {
  try {
  const request = await fetch(url)
  const json = await request.json()
  for (let i = 1; i <= 3; i++)
  {
    let randomNum = Math.floor(Math.random()*1302)
    let urlDetails = json.results[randomNum].url;
    const requestEach = await fetch(urlDetails);
    const jsonEach = await requestEach.json()
    console.log(jsonEach);
  }
  }
  catch (error) {
    console.error("Error fetching data:",error)
  }
 
  
}
task2();

//Task 3

async function task3() {
  try {
  const request = await fetch(url)
    const json = await request.json()
    // result=[]
  for (let i = 1; i <= 3; i++)
  {
    let randomNum = Math.floor(Math.random()*1302)
    let urlDetails = json.results[randomNum].name;
    console.log(urlDetails)
    const requestEach = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${urlDetails}`);
    const requestEachJson = await requestEach.json();
    const flavorText = requestEachJson.flavor_text_entries;
    let description=flavorText.filter(
      description => description.language.name === "en"
    ) 

  }
    return console.log(description)
  }
  catch (error) {
    console.error("Error fetching data:",error)
  }
}
task3();

async function task4() {
  const finalCardResult=[]
  try {
    for (i = 1; i <= 3; i++) {
      let response = await fetch(url)
      let result = await response.json();
      let randomNum = Math.floor(Math.random()*1302)
      let pokemon_name = result.results[randomNum].name;
      console.log(pokemon_name)
      let responseDescription = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`);
      let requestEachJson = await responseDescription.json();
      let flavorText = await requestEachJson.flavor_text_entries;
      let description=flavorText.filter(
      description => description.language.name === "en"
      ) 
      console.log(description[0])
      let responseImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      let resultImage =  await responseImage.json();
      let image = resultImage.sprites.front_default;
      console.log(image)
      let finalCardObj = {
          name: pokemon_name,
          description: description[0].flavor_text,
          image:image
      }
      finalCardResult.push(finalCardObj);
    }
    return finalCardResult
  }
  catch (e) {
    console.error("Error fetching data:",error)
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const btn = document.querySelector('.draw-pokemon');
  btn.addEventListener('click', async function () {
      const cards = await task4();
   for(const card of cards){
        const container = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h2')
        const description = document.createElement('p')
        name.textContent = card.name
        image.setAttribute('src', card.image)
      description.textContent = card.description;
      container.appendChild(name)
      container.appendChild(image)
      container.appendChild(description)
      document.getElementById('myContainer').appendChild(container);
      container.classList.add('pokemon-card-details')
      
    };
    // btn.disabled = true;
})
})

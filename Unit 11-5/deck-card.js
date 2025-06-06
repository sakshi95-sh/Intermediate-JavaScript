const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

// const fetch = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
// const json = fetch.json();
// const id = json.deck_id();

// Using Promise: Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
fetch(url)
  .then(response => response.json())
  .then(data => {
    const deck_id = data.deck_id;
    console.log(deck_id)
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);
  }).then(response => response.json())
  .then(cardData => {
   cardData.cards.forEach(card => {
      console.log(`${card.value} of ${card.suit}`)
    });
  }).catch(error=>{
    console.error("Error fetching data:",error)
  });
  
//Using Async 

async function task1() {
  try {
    let  response = await fetch(url);
    let data = await response.json()
    let cardData = await fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`)
    let cardResponse = await cardData.json()
   cardResponse.cards.forEach(card => {
      console.log(`${card.value} of ${card.suit}`)
    });
  } catch (error){
    console.error("Error fetching data:",error)
  }
}
task1()

//Task2: 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the **same** deck. Once you have both cards, ***console.log*** the values and suits of both cards.
    
fetch(url)
  .then(response => response.json())
  .then(data => {
    const deck_id = data.deck_id;
    console.log("Task2:", deck_id)
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
  }).then(response => response.json())
  .then(firstCard => {
    value = firstCard.cards[0].value;
    suit = firstCard.cards[0].suit;
    deck_id = firstCard.deck_id;
    console.log(`Task 2: ${value} of ${suit}`);
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
  }).then(response => response.json())
  .then(secondCard => {
    value = secondCard.cards[0].value;
    suit = secondCard.cards[0].suit;
    deck_id = secondCard.deck_id;
    console.log(`Task 2: ${value} of ${suit}`);
  }).catch(error=>{
    console.error("Error fetching data:",error)
  });

//Using Async 

async function task2() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    //First Draw
    const firstCardDraw = await fetch(`https://deckofcardsapi.com/api/deck/${json.deck_id}/draw/?count=1`)
    const firstCardJson = await firstCardDraw.json();
    console.log(`Task 2 Async: ${firstCardJson.cards[0].value} of ${firstCardJson.cards[0].suit}`);

    //Second Draw
    const secondCardDraw = await fetch(`https://deckofcardsapi.com/api/deck/${json.deck_id}/draw/?count=1`)
    const secondCardJson = await secondCardDraw.json();
    console.log(`Task 2 Async: ${secondCardJson.cards[0].value} of ${secondCardJson.cards[0].suit}`);
  }
  catch (error) {
    console.error("Error fetching data:",error)
  }
}
task2();
async function task3() {
  try {
    //
    const getCard = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    const getCardJson = await getCard.json()
    const cardImage = getCardJson.cards[0].image;
   console.log("REMAINING",getCardJson.remaining)
    if (getCardJson.remaining === 0) {
  document.querySelector('.draw-card').disabled = true;
  document.querySelector('.draw-card').textContent = "No Cards Left!";
}
    return cardImage;
  } catch (e) {
     console.error("Error fetching data:",error)
  }
}
let deck_id;
document.addEventListener("DOMContentLoaded", async function () {
  const cardButton = document.querySelector(".draw-card")
  const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  const data = await res.json();
  const deck_id =  data.deck_id;
cardButton.addEventListener("click", async function () {
const image = document.createElement('img')
image.style.position = 'absolute';
image.style.top = '50%';
image.style.left = '50%';
image.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 30 - 15}deg)`;
const card =  await task3();
image.setAttribute('src', card)
document.getElementById('myContainer').appendChild(image)
});
})
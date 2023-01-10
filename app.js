/* Array criando 12 cartões */
const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger',
  },
  
  {
    name: 'icecream',
    img: 'images/icecream.png',
  },
  
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },

  {
    name: 'fries',
    img: 'images/fries.png',
  },
  
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger',
  },
  
  {
    name: 'icecream',
    img: 'images/icecream.png',
  },
  
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },

]
cardArray.sort(() => 0.5 - Math.random()) //sorteando randomicamente a array
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []
//Funcao criando o Tabuleiro
function createBoard() {
  for (let i = 0; i < cardArray.length; i++){
    const card  = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card) //mostra as cartas na DIV o HTML
  }
}
createBoard()

/*Funcao para verificar se combina*/

function checkMatch() {
  
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChoosenIds[0]
  const optionTwoId = cardsChoosenIds[1]
  console.log(cards)
  console.log('Check for match!')
  
  if(optionOneId == optionTwoId) {
     cards[optionOneId].setAttribute('src', 'images/blank.png')
     cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked on the same image!')
  }
  
  if (cardsChoosen[0] == cardsChoosen[1]) {
    alert('You found a Match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChoosen)
  } else {
     cards[optionOneId].setAttribute('src', 'images/blank.png')
     cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  resultDisplay.textContent = cardsWon.length
  cardsChoosen = []
  cardsChoosenIds = []
  
  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations you found then all!'
  }
}

/*Funcao para virar a carta quando clicada*/

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsChoosen.push(cardArray[cardId].name)
  cardsChoosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChoosen.length ===2){
      setTimeout( checkMatch, 500)
  }
}

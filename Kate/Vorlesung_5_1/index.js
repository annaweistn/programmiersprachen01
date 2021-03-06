//parent element - div id = cards-container
// only for ids
const cardsContainer = document.getElementById('cards-container')
// e.g. for class
// document.querySelector('your-class')

const addButton = document.getElementById('add-btn')
const removeButton = document.getElementById('remove-btn')
const toggleBth = document.getElementById('toggle-btn')

const createCards = () => {
    removeCards()
    for (let i = 1; i < 6; i++) {
        // create element 
        const card = document.createElement('div')
        //add some content
        card.innerHTML = `<p>Element number ${i} </p>`
        // add styles - class
        card.classList.add('card')
        //append element
        cardsContainer.appendChild(card)
    }
}

const removeCards = () => {
    // check if cardsContainer has child elements 
    if (cardsContainer.hasChildNodes()) {
        //remove child elements 
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild)
        }
    }
}

const toggleClass = () => {
    if (!cardsContainer.hasChildNodes()) {
        return
    }

    const cards = document.querySelectorAll('.card')

    console.log(cards)
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('card--dark')
    }
}


// addEventListener - attaches an event handler to an element
// element.addEventListener(event, function)
addButton.addEventListener('click', createCards)
removeButton.addEventListener('click', removeCards)
toggleBth.addEventListener('click', toggleClass)
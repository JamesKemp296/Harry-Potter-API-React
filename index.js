const url = 'http://hp-api.herokuapp.com/api/characters'
const charactersDiv = document.querySelector('#characters')
const sortByName = document.querySelector('#sortByName')
const sortByHouse = document.querySelector('#sortByHouse')
const sortByAlive = document.querySelector('#sortByAlive')


const getCharacters = () => {
  fetch(url)
  .then(response => response.json())
  .then(posts => {
    console.log(posts)
    charactersDiv.innerHTML = posts.map(post => (
      `
      <div class="character">
        <h3 class="title">${post.name}</h3>
        <img class="image" src="${post.image}" alt="${post.name}"/>
      </div>
      `
    )).join('')
  })
}
getCharacters();

const sortCharactersByName = () => {
  fetch(url)
  .then(response => response.json())
  .then(posts => {
    posts.sort((char1, char2) => char1.name < char2.name ? -1 : 1)
    console.log(posts)
    charactersDiv.innerHTML = posts.map(post => (
      `
      <div class="character">
        <h3 class="title">${post.name}</h3>
        <img class="image" src="${post.image}" alt="${post.name}"/>
      </div>
      `
    )).join('')
  })
  // Do not edit below this line
}
sortByName.addEventListener('click', sortCharactersByName)

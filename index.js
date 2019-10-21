const url = 'http://hp-api.herokuapp.com/api/characters'
let charactersDiv = document.querySelector('#characters')

const getCharacters = () => {
  // Do not edit above this line
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
  // Do not edit below this line
};
getCharacters();

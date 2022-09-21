// let character;


function animeCharacters(){
  fetch('https://nekos.best/api/v2/neko')
    .then(response => response.json())
    .then(json => {

      document.getElementById('img').innerHTML = `<img src="${json.results[0].url}" height=300 />`
    })
  
}
// const animeCharacters = () => {
// }



// console.log(character);
// const character=json.results[0].url

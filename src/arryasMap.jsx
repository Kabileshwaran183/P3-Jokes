
const nums = [1, 2, 3, 4, 5]
const squares = nums.map(function(num) {
    return num * num
})
console.log(squares)  // -->       [1, 4, 9, 16, 25]



const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalized)  // -->        ["Alice", "Bob", "Charlie", "Danielle"]




const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
console.log(paragraphs)    //-->      ['<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>']
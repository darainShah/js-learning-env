const marvel_heros = ["spiderman", "Thor", "captain America"]
const dc_heros = ["flash", "batman", "Hulk"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros) // arrays comes under array so access become diffucult

const newARRay = marvel_heros.concat(dc_heros)
console.log(newARRay)


// Spread  method      ----------> this is the most used and easy method for accessing different arrays in a single arrays

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// Flat method

const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10,11]]]
const newanotheraArray = anotherArray.flat(Infinity) // one can use number(depth) also in place of infinity as per their requirement

console.log(newanotheraArray)

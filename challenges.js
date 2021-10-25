// 1
// Reverse an array without the built in method
const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

// 2
// Loop through an array (two ways)
  //Classic function in variable, loop = 
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = (aliens) => {
    for (let i = 0; i < aliens.length; i++){
      console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
  }

  // for ...of loop
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
for (const greetAliens of aliens){
    console.log(`Oh powerful ${greetAliens}, we humans offer our unconditional surrender!`);
  } 

/* a simple for loop with nothing else would also print the same result, but without being stored in a variable */
for (let i = 0; i < aliens.length; i++){
  console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
}

// 3
//Function that takes in an array as an argument and, using a loop, returns a new array with each string in the array starting with 'baby'
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = animals => {
  const babyArray = [];
  for (let i = 0; i < animals.length; i++){
     babyArray.push(`Baby ${animals[i]}`);
  }
  return babyArray
}
console.log(convertToBaby(animals));

// 4
//Use forEach() in a function that takes an array of strings and loops through each, and accepts each of them 
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const acceptEverything = (veggies) => {
  veggies.forEach(veg =>
    console.log(`Ok, I guess I will eat some ${veg}.`));
}

console.log(acceptEverything(veggies)); //Print: ok, I guess I will eat some brocolli. Ok,...spinach , etc.

// 5
// Function that takes in an array of strings and returns a new array in capialized letters. 
 // Super short form - condensed function! 
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

 //function declaration + loop
 const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

 function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}

// 6 
//Sort an array of numbers from lowest to highest
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = years.sort((a , b) => a - b); //highest to lowest would be 'b - a'
console.log(sortYears);
/* OR 
const sortYears = arr => arr.sort((x, y) => y - x);
console.log(sortYears(years))
*/


// 7 
// return an array with the values that are present in BOTH given arrays

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/* OR
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

// 8 
// Function that takes an array wrote in object format and sort the array in ascending order based on the numbers
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray))

// 9 
// Return the posotion of 'keys' if the string exists in the array
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

console.log(findMyKeys(randomStuff))
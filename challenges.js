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
//Function that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '
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
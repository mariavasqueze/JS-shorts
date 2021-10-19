//Transform a phrase into whale talk (meaning just vowels, and duplicates 'e' and 'u' letters.)
const input = 'Lulu Lemon';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowel = 0; vowel < vowels.length; vowel++){
    if (input[inputIndex] === vowels[vowel]){ // Check if it is a vowel
    if (input[inputIndex] === 'e'){ // if it's a e, push a double e. 
      resultArray.push('ee');
    }
    else if (input[inputIndex] === 'u'){
      resultArray.push('uu');
    }
    else{
      resultArray.push(input[inputIndex]);
    }
  }
 }
}
console.log(resultArray.join('').toUpperCase()); //take out the comas between each word and maka them uppercase.
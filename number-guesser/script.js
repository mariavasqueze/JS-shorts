let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random number
const generateTarget = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }
  
  // Determine closest guess to target
  const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
    return humanDifference <= computerDifference; // return true if left is less or = than right
  }
  //console.log(compareGuesses(6, 5, 7)); --> = true = human wins, false compuetr wins
  
  // Increase winner's score after each round
  const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  // Update round number (each round) 
  const advanceRound = () => currentRoundNumber++;
  
  
// User's input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
     if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb') {
      return userInput;
    }
    else {
      console.log('Invalid input');
    }
  }
  // Computer random choice 
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissors';
  }
  };
  
  //Determine who wins: 
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return ('This is a Tie!');
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Wins!';
      } else {
        return 'Congrats you Win!';
      } 
    }   
    if (userChoice === 'paper') { 
      if (computerChoice === 'scissors') {
        return 'Computer Wins!';
      } else {
        return 'Congrats you Win!';
      }
    }
    if (userChoice === 'scissors') { 
      if (computerChoice === 'rock') {
      return 'Computer Wins!';
      } else {
        return 'Congrats you Win!';
      }
    }
    if (userChoice === 'bomb') {
      return 'Congrats you found the code word, you Win!';
    }
  };
  
  // Calling the variables to play: 
  const playGame = () => {
    const userChoice = getUserChoice('bomb'); // these variables have assigned strings so we can call them. 
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice)
  
  console.log(determineWinner(userChoice, computerChoice)); // These two are now arguments since they are parameters which are being called. 
  };
  
  //Execute the code:
  playGame();
// 1
// if each users deducts 5 units from the network's total data, to watch a movie you need at least 10 remaining units
// return true if there is enough data to connect
class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    
    movieTime(){
      const userData = this.users * 5;
      if (this.data - userData >= 10){
        return true;
      }
      return false;
    }
  }

  const library = new Network(50, 9) 
    console.log(library.movieTime()); // returns false

//2 
// Count how many baloons each player has left after 10 minutes, the one with more left wins
class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }

  const balloonAttack = (player1, player2) => {
    for (let i = 1; i <= 10; i++){
      player2.balloonCount -= player1.hitsPerMinute
      player1.balloonCount -= player2.hitsPerMinute
      player1.status();
      player2.status();
    }
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name;
    }else if (player2.balloonCount > player1.balloonCount)
      return player2.name
  
    return 'Tie'
  }
  
  const p1 = new Player('p1', 5);
  const p2 = new Player('p2', 2);
   
  balloonAttack(p1, p2); // prints ballons left after hits per minute

  // 3 
  // Caesar's cipher --> quite complicated version, it could be simplified a lot! Answer from codeacademy
  class ShiftCipher {
    constructor(shift){
      this.shift = shift;
    }
    encrypt(plainString) {
      let encryptString = '';
      const tempString = plainString.toUpperCase();
  
      for (let i=0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);
        
        if (charNum <= 90 && charNum >= 65) {
          charNum += this.shift;
          if (charNum > 90) {
            charNum -= 26;
          }
        }
        encryptString += String.fromCharCode(charNum);
      }
      return encryptString;
    }
  
    decrypt(encryptString) {
      let decryptString = '';
      const tempString = encryptString.toLowerCase();
  
      for (let i=0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);
        
        if (charNum <= 122 && charNum >= 97) {
          charNum -= this.shift;
          if (charNum < 97) {
            charNum += 26;
          }
        }
        decryptString += String.fromCharCode(charNum);
      }
      return decryptString;
    }
  }
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
  console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
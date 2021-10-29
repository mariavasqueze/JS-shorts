// Create a directory for books, movies, and CDs inside a parent Media
class Media {
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set checkOut(check){
    this._isCheckedOut = check;
  }
  toggleCheckOutStatus(status){
    this._isCheckedOut = !this._isCheckedOut; //if value true change to false. 
  }
  getAverageRating(){
    const ratingSum = this._ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingSum / this.ratings.length; //get average rating
  }
  addRating(rating){
    this.ratings.push(rating);
  }
}
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages (){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class Cd extends Media {
  constructor(artist, title){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
}

// Add info to the classes: 
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating()); //prints 4.66
console.log(historyOfEverything);  //prints all 5 values of the book

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating()); //prints 2.33
console.log(speed); //prints all 5 values of the movie

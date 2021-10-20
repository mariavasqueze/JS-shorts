const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this._courses.appetizers;
      },
    get mains(){
      return this._courses.mains;
      },
    get desserts(){
      return this._courses.desserts;
      },
    set appetizers(appetizer) { 
      this._courses.appetizers =  appetizer;
    },
    set mains(main) {
      this._courses.mains =  main;
    },
    set desserts(dessert) {
      this._courses.desserts =  dessert;
    },
  
    //Getter that returns an object that contains key/value pairs for apetizers, mains, and desserts
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    //method to add a new course to a specified course on the menu
    addDishToCourse(courseName, dishName, dishPrice){
      const dish  = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    //get a random dish from a course in the menu
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    }, 
  
  //function to generate a three-course meal for us
  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  
    return `Your meal has an appetizer: ${appetizer.name}, a main dish: ${main.name}, and a dessert: ${dessert.name}. For a total price of $${totalPrice}`;
  }
  };
  
  menu.addDishToCourse('desserts', 'Chocolate Cake', 10.00);
  menu.addDishToCourse('desserts', 'Lemon Pie', 12.00);
  menu.addDishToCourse('desserts', 'Dulce de Leche and vanilla', 10.00);
  
  menu.addDishToCourse('mains', 'Baked Salmon', 45.00);
  menu.addDishToCourse('mains', 'Meat a la France', 50.00);
  menu.addDishToCourse('mains', 'Fish a la Marinara', 40.00);
  
  menu.addDishToCourse('appetizers', 'Carpaccio di Lomo', 20.00);
  menu.addDishToCourse('appetizers', 'Jamon Serrano Bellota', 50.00);
  menu.addDishToCourse('appetizers', 'Salte Vegetables', 18.00);
  
  const meal = menu.getRandomDishFromCourse();
  console.log(meal);
  
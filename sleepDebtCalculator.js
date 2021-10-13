// Determine how many hours you sleep each night
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 7; 
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday': 
        return 6;
        break;
      case 'thursday': 
        return 8;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 6;
        break;
      default:
        return 'Invalid, try a day from Monday to Sunday';
        break;
    }
  }
  
  // Calculate total hours you actually slept
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');  
  
  // Get ideal sleep hours you prefer
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  // Answers to results:
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You have the perfect amount of sleep, congrats!');
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('Hey sleepy! you got ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week than you need.');
    }
    else if(actualSleepHours < idealSleepHours) {
      console.log('You should go lay down love, you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should this week');
    }
  else {
    console.log('Error! Something went wrong check your Input!');
  }
  };
  
  //Test run
  console.log('On this day, you slept ' + getSleepHours('sunday') + ' hours.');
  console.log('The slept a total of ' + getActualSleepHours() + ' hours this week.');
  console.log('Your ideal sleeping target is ' + getIdealSleepHours() + ' hours per week.');
  
  // Run result: 
  calculateSleepDebt();
  
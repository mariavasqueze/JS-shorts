// Use the methods of Queue 

const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3); //Maximum que of 3 
  flights.forEach(flight => {
  //Enqueue (add to end) each flight into the runway and catch error if runway is full. 
    try {
     runway.enqueue(flight); 
     console.log(`${flight} taxi to runway.`);
  }
  catch (e){
    console.log('Runway full!');
  }
  
  });
  return runway;   
};

// While the runway is not empty, allow planes to keep going out. check if empty with queue method
const clear = runway => {
  while(!runway.isEmpty()) {
    const cleared = runway.dequeue();
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };
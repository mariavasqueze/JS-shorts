// basic factorial exercise using recursion. See xplanation in google doc.
const recursiveFactorial = (n) => {
    // make sure it doesn't return NaN and gives the n! result at the end:
    if (n === 0) {
      return 1;
    }
    // Execute factorial for all numbers bigger than 0
    if (n > 0){
      console.log(`Execution context: ${n}`);
      return recursiveFactorial(n - 1) * n;
    }
  }
  //Create and print 
  const recursiveSolution = recursiveFactorial(5);
  console.log(recursiveSolution);
  
  
  
  
  
  module.exports = {
    recursiveFactorial
  };
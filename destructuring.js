// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables.

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
var {color,make,model,year}=carDetails;

// ========================


// In the function below named greeting, it is receiving an object as a parameter.
// Use object destructuring to save the object properties to new variables. The property names are firstName, lastName, and title.
//Return the concatenated string.

function greeting( obj ) {
  
  // CODE HERE
var {firstName,lastName,title} =obj;



  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}
//return `Hello,`${title}${firstName}${}`` look up template literals




// ========================


// Write a function called totalPopulation that will take in an object.
//That object will have 4 properties named utah, california, texas and arizona.
// The property values will be numbers. Use object destructuring to save the property values to new variables.
// Sum up the values and return the total number.

  // CODE HERE
function totalPopulation(personObj){
  var {utah,california,texas,arizona}=personObj;
  return utah + california + texas + arizona;
}

// ========================


<<<<<<< HEAD
// Write a function called ingrediants that will take in an object. This object will have 3 properties named carb, fat, and protein.
//The property values will be strings. Use object destructuring to save the property values to new variables.
 // Push these new variables to an array and return the array.
=======
// Write a function called ingredients that will take in an object. This object will have 3 properties named carb, fat, and protein. The property values will be strings. Use object destructuring to save the property values to new variables. Push these new variables to an array and return the array. 
>>>>>>> 50d49a81d12a5cad03a37212e52d03a4342a6380

  // CODE HERE
function ingrediants(foodObj){
  var foodNew =[];
  var {carb,fat,protein} = foodObj;

   foodNew.push(carb,fat,protein);
     return foodNew;
}



// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. The object properties will be
// named first, second, and third and their values will be numbers. Find the smallest number of the three and return that number.

  // CODE HERE
function largeNumbers ({first,second,third}){
  return Math.min(first,second,third);
}

// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter.
//The object properties will be named a, b, and c and their values will be arrays of numbers.
//Find the longest array and return that array.

  // CODE HERE
  var obj1 = {
    a: [1, 2, 3, 6, 9, 3],
    b: [2, 3, 4, 5, 6],
    c: [1, 5, 3, 4]
  }

  function numberGroups({a,b,c}){
    //loop throught the array.
    //find the largest array against the other ones.
    //if it is the biggest one return that.
   var biggestNumberAorB = a.length > b.length ? a:b;
   console.log(biggetNumberAorB)
   biggestNumberAorB.length > c.length? b:c;
  }

  numberGroups(obj1);

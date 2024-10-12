// Spread operator
/*
 - easily create a shallow copy of an object
 - mostly use if you want to copy object/array and add/modify values in it

*/
const userDetails = {
  name: "John Kilima",
  address: {
    city: "Daresalam",
    country: "TZ",
  },
  sample: {
    test: "test",
  },
};
const newUserDetails = { ...userDetails, name: "Mabula", mobileNumber: 233535 }; //name is overwritten
//If we add new assignment
newUserDetails.sample.test = "newTest";
//The above will edit both samples since its shallowcopy
console.log("userDetails:", userDetails);
console.log("newUserDetails:", newUserDetails);

//Other example
const fruits1 = ["apple", "avocado"];
const newFruits = [...fruits1, "guava"];

console.log("fruits:", fruits1);
console.log("new fruits:", newFruits);

// Rest Parameters
/*
Allow us to represent an indefinite number of arguments as an array.
Allow to use array functions such as reduce. Therefore compared to arguments object, rest parameters can use array functions while arguments can not
As seen for arguments it will return the length but 
 */
function sum(...thisArgs) {
  return thisArgs.reduce(function (previous, current) {
    return previous + current;
  });
}

console.log(sum(5, 5, 5));

function len(...thisArgs) {
  return arguments.length;
}

console.log(len(5, 5, 5));

// Destructuring
/*
 - Javascript expression that makes it possible to unpack values from arrays or properties from objects, into distinct variables
 - You can also change the name, assign default values and use rest parameters.
*/

//Without Destructuring
/*
const name = userDetails.name;
const address = userDetails.address;

const firstFruit = fruits[0] || 'defaultFruit';
const otherFruits = fruits.filter((value, index) => index !== 0);
*/

//With Destructuring
const { name: newName = "Jean", address, ...otherDetails } = userDetails; // this is same as const newName = userDetails.name can also overide value with default value that will only pick if the original object does not have a key name

console.log(newName);
console.log(address);
console.log(otherDetails);

const fruits = [undefined, "apple", "mango", "pineapple"];

const [firstFruit = "defaultFruit", ...otherFruits] = fruits; //The default fruit picjs if first fruit is undefined
console.log(firstFruit)
console.log(otherFruits)

// Copying array or objects is a bit dangerous as updating the copy can update the original also
const orig = {
  test: "test",
  userDetails: {
    address: {
      province: "Province",
      country: "country",
    },
    name: "myObject",
    myFn: () => {},
    undef: undefined,
  },
};

const orig2 = ["avocado", "apple", { name: "strawberry" }];

//   const normalCopy = orig;
//   normalCopy.test = "newTest";
//   console.log("orig:", orig);
//   console.log("normalCopy:", normalCopy);

// Therefore we can do either shallow or deep copy
//Shallow Copy
/*
We only copy the first layer of the object from the original
To do a shallow copy we can use some of the functions
  - Object: Object.assign()
  - Array: Array.slice()
  - Both - spread operator (...)
As its seen the shallow only copies first layer hence can cause issues for change in second layer if happens 
*/

const shallowCopy = Object.assign({}, orig);
shallowCopy.test = "newTest";
console.log("original copy:", orig);
shallowCopy.userDetails.name = "newName"; // This will affect the name value as it was only shallow copied
console.log("shallowCopy:", shallowCopy);

const shallowCopy2 = orig2.slice();
console.log("original list:", orig2);
shallowCopy2.push("guava");
shallowCopy2[2].name = "coconut";
console.log("shallowCopy List:", shallowCopy2);
// As can be seen the orig did not change
//Deep Copy
/*
We copy the object fully and it does not reference any values in the original
As the name states it will do a deep copy of the object so that if 
yoiu change a property of an object, it will not affect the other copy.
 - JSON.parse(JSON.stringify(object))
   - First converts object to string then back to object
   - bit slow in terms of performance but the easiest to code.
   - will cause some data loss if your object contains function, new Date(), udefined etc.
   - If will use this method make sure to use data that json understands.
 - Packages/ Libraries
   - Lodash - cloneDeep function
   - Jquery - jQuery.extend
 - OR Create your own!
   - Example use Object.assign to copy using a for loop so as to access all the keys
   Example use Object.assign to copy using a for loop so as to access all the keys
*/
const deepCopy = JSON.parse(JSON.stringify(orig));
deepCopy.userDetails.name = "Deep Copy";
console.log("Deep copied: ", deepCopy);

const deepCopy2 = JSON.parse(JSON.stringify(orig2));
deepCopy2[2].name = "Deep Copy";
console.log("Deep copied List: ", deepCopy2);
/*
As can be seen if we pass values like functions and undefined the JSON does not understand that format 
Therefore its not copied in deep copy
*/

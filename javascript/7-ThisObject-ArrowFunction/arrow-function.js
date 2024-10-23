//This object
this.console.log("I am Global Object"); //Global Object
const userDetails = {
  name: "John Kilima",
  getName: function () {
    return this.name; //userDetails Object
  },
};
console.log(userDetails.getName());
// Therefore this refers to parent object of the object being called

// Arrow Function
class Person {
  name = "My Name";
  printName() {
    console.log("Person:", this.name);
  }

  printNameArrowFn(){
    const userDetails = {
      name: 'user Details',
      printName: () => {
        console.log('User Details:', this.name);
      }
    }
    userDetails.printName();
  }
}
const iam = new Person()
iam.printName() //Person: My Name
iam.printNameArrowFn() //User Details: My Name
class Shape {
  #privateVariable = "privateVariable";
  publicVariable = "publicVariable";
  static staticVariable = "staticVariable";

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return "not implemented";
  }

  getPrivateData(){
    return this.#privateVariable;
  }
}

class Square extends Shape {
  getArea() {
    return this.height * this.width;
  }
  getParentArea() {
    return super.getArea();
  }
}
const mySquare = new Square(5, 10);

console.log('Area is:', mySquare.getArea());
console.log('Parent Area is:', mySquare.getParentArea());
console.log('Private variable:', mySquare.getPrivateData());
const myShape = new Shape(5, 10);

console.log(myShape.publicVariable);
console.log(myShape.width);
console.log(myShape.height);
console.log(myShape.staticVariable); // its undefined since its not the correct way to access it since it does not need instantiating
console.log(Shape.staticVariable);
// console.log(myShape.#privateVariable)// This causes an error since a private field can not be accessible outside the class

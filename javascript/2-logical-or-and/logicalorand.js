// THE LOGIOCAL AND
//This returns the true value or the last false value
const test = 5 || 6;
const sample = 0 || 20;
const sample2 = 0 || false || null;
console.log(test);
// prints 5 because 5 is not false value and it checks for 5 first
console.log(sample);
// it prints 20 because it checks for 0 first and zero is is same as false therefore checks fopr the next value and 20 is not a false value
console.log(sample2);
// it checks all the values are false hence just return the last value

// THE LOGIOCAL AND
//This returns the false value or the last truth value
const andtest = 5 && 6;
const andsample = 0 && 20;
const andsample2 = 0 && false && null;
console.log(andtest);
// prints 6 because 5 is is true value and it checks for 5 first then 6
console.log(andsample);
// it prints 0 because it checks for 0 first and zero is is same as false therefore prints it
console.log(andsample2);
// it prints 0 because it checks for 0 first and zero is is same as false therefore prints it

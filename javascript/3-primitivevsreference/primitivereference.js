//PRIMITIVE VALUES
/* Primiteve Values are
string, number, bigint, boolean, undefined and symbol
Copying a value from one variable to another then changing the other variables value will not affect the previous
*/
let sample = 5;
let copySample = sample;
sample = 10;
console.log("sample:", sample);
console.log("copySample", copySample);
// As seen above changing value of sample after copying its value did not affect the copy


// Reference Type
/*
These are Object and Arrays
 */
let sampleref = {name: 'John'};
let copySampleref = sampleref;
sampleref.test = 'test';
console.log("sampleref:", sampleref);
console.log("copySampleref", copySampleref);
//As can be seen both sampleref and copySampleref have the value test 
// Tha is because when you copy an object it copies its reference memory adrress and not the values
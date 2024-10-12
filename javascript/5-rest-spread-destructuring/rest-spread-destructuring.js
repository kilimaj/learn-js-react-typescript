// Rest Parameters 
/*
Allow to use array functions such as reduce.
As seen for arguments it will return the length but 
 */
function sum(...thisArgs) {
  return thisArgs.reduce(function (previous, current) {
    return previous + current;
  });
}

console.log(sum(5, 5, 5));

function len(...thisArgs) {
  return arguments.length
}

console.log(len(5, 5, 5));

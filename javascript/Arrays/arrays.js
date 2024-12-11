let hobbies = ["sports", "cooking", 25, true, {name: "baking"}, ["reading", "traveling"]]
console.log(hobbies)

console.log(" ")

console.log("first method of for loop")
console.log(" ")
for(let hobby of hobbies){
    console.log(hobby)
}

console.log(" ")

console.log("Second method of for loop")
console.log(" ")
for(let index in hobbies){
    console.log(hobbies[index])
}

console.log(" ")

console.log("Built in methods: slice method")
console.log(" ")

let hobbiesArray = ["sports", "cooking", "painting"]

let hobbiesSubset = hobbiesArray.slice(0,2)

console.log("hobiesArray: ", hobbiesArray)
console.log("hobbiesSubset using slice: ", hobbiesSubset)

console.log(" ")
console.log("Built in methods: filter method")
console.log(" ")

let filteredHobbies = hobbiesArray.filter((val) => val !== "sports")

console.log("Filter hobbies except sports: ",filteredHobbies)

console.log(" ")
console.log("Built in methods: map method")
console.log(" ")

let updatedHobbies = hobbiesArray.map((val) => "hobby: " + val)
console.log("Updated hobbies: ", updatedHobbies)
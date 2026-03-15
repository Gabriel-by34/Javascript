//object data type:
//an object in javascript is a data type that stores data in form of the key value
let person={
    Name:"Gabriel",
    Age:40,
    isRegistered:true

}
console.log("the detail of the person is:",person)
// First method is by use of the square brackets
console.log(person["Age"])
// second method is by use of the dot(.notations)
console.log(person.Name)
// Check the data type
console.log(typeof(person))
//what is the difference between a dictonary in python and object in java script and jsaon data when dealing with API,s.
// Array data type
//this referes to collection of items
let fruits=["mango", "Pineapple","Apple","Banana","Melon","Lemon","Grapes"]
console.log("The entire array of furits",fruits)
// to access the items in arrays we use indexes
console.log(fruits[3])
//You can slice items of arrays
console.log(fruits.slice(2,5))
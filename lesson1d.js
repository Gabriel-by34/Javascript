//Data types
// string data type: it is series /sequences of characters that are enclosed inside of a quotation marks.
let name="Gabriel Musera"
console.log("The name is:",name)
console.log(typeof(name))
//Floating point: this is a number with decimal
let quantity=35.5
console.log("The quantity of sugar bought is:",quantity)
console.log(typeof(quantity))
// Boolean : it returns true or false
let isAdult=true
let isRegistered=false
console.log("is James an Adult?",isAdult)
console.log("Is he registered as a voter?",isRegistered)
console.log(typeof(isAdult))
//undefined:This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is:",county)
//null data type: is a data type that cointains null values
let username=null
console.log("What is the username?:",username)
//Assignment research and come up with examples on object and arrays data type. show how to access the items of the object and of an array.
//Work out
//Object data type: an object stores data in key-value pairs
//example
let student={name:"Gabriel",age:30,course:"fullstackwebdevelopment",isRegistered:true};
//in this case name,age,course,isRegistered: key(properties) and "john",30,"fullstackwebdevelopment",true:value
//accessing the object items
console.log(student.name);
console.log(student.age)
//bracket notation
console.log(student["course"]);
console.log(student["isRegistered"])

//array data type
//An array stores multiple value in a list.Each item has an index starting from 0.
//Example array
let fruits=["apple","Banana","Mango","Orange"];
//index positions
//0=apple,1=banana,2=mango,3=ornage
//Accessing the items
console.log(fruits[0]);
console.log(fruits[3]);
// how to access the last items
console.log(fruits[fruits.length - 1]);


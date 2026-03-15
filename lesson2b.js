//comparison operators
// they usually evaluate to bolean data type
let number1=5
let number2=10
console.log(number1==number2)
console.log(number1>=number2)
console.log(number2>number1)
console.log(number1*2==number2)
console.log(number1<=number2)
console.log(number1>number2)
console.log(number1!=number2)
console.log(number1!=number1)
//triple equal signs in js //Assignment
//In JavaScript, the triple equal sign === is called the strict equality operator. Its role is to compare two values and check both their value and their data type. If either the value or the type is different, it returns false and vice verse.
//It usually checks two things: Value and Data type
//example:

5 === 5        // true
5 === "5"      // false
true === 1     // false
let number3=15
let number4=20
console.log(number3===number4)
//Explanation:

5 === "5" //is false because one is a number and the other is a string.
//Why developers prefer ===,Most developers recommend using === because it://Avoids unexpected type conversions/Makes code more predictable Reduces bugs
//Example bug avoided:

0 == false     // true
0 === false    // false
// Logical Operators
//logical operators are used to evaluate two or more condition and they give a bolean answer(true or false)
//logical ANd(&&) it evaluate true if both conditions/statement are met(true)
console.log((number1 < number2)&&(number2 > number1)&&(number3 > number2))

//Logical or(|| it evalute to true if one of the condition is true)
console.log((number1>number2)||(number2>number1))
//logical Not(!) it used to nagate the condition or statement
console.log(!(number1<number2))


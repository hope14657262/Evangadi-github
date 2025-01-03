console.log("Hello Word")
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function

function myFirst(){
console.log("HELLO!!!")
}
myFirst();

// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function
function mySecond(x){
    console.log("Feel free to give any value as a parameter in your function")
    console.log(x)
}
mySecond("hope");


// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

function myThird(y){
console.log(y)
}
myThird("40");




// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

let myFourth = [234, "hope", "sami", "abebe"]

console.log (myFourth[0]);


// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console

let myFifth = [4, 5,]
console.log(myFifth[0] + myFifth[1]);


// Question 6
// ● Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	return minutes * 30;
}
let seconds = convert(4);
console.log(seconds);

// Question 7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.

function addition(num) {
	return num + 1;
}
let sum = addition(9);
console.log(sum);

// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.

function triarea(base, height){
  return base * height / 2;  
}
let Area = triarea(6,7);
console.log(Area);

// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.

function totalnumberofleg(chickens, cows, pigs){
return (chickens * 2) + (cows * 4) + (pigs * 4);
}
let number_of_leg = totalnumberofleg(2,3,5)
console.log(number_of_leg);

// Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and
// returns a value that is 3 times the first element of the array
 let twonumber = [1, 2];
 console.log(twonumber[0]);

//   for return function
function tripleFirstElement(array) {
    // Ensure the array has exactly two elements
    if (array.length !== 2) {
      throw new Error("Array must contain exactly two elements");
    }

    // Extract the first element
    const firstElement = array[0];

    // Triple the first element
   return firstElement * 3;
}


//   Question 11
//   ● Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
    if (num1 === num2){
        return true;
    }
else {
    return false;
}
}
let equalty = isSameNum(4,6)
console.log(equalty);

// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false
function divisible(num) {
	if (num % 100 === 0)
    {
    return  true;
    }
    else
    {
 return false;
    }
}
let modules = divisible(800);
console.log(modules);

// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
function isEvenOrOdd(num){
	if (num % 2 == 0){
        return "even";
    }
    else
    {
    return "odd";
    }
}
let evenodd = isEvenOrOdd(10);
console.log(evenodd);

// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

function grade(num)
{

    if (num >= 90 && num <= 100){
        return "Grade A"
    }
    else if(num >= 80 && num <= 89){
        return "Grade B"
    }
  else if  (num < 80 && num >= 0)
{
    return "Grade C"
}
else 
{
return "Invalid score"
}
}
let score = grade(79.5);
console.log(score);






// function getFirstValue(arr) {
// 	return getFirstValue[0];
// }
// getFirstValue(1,6,7,);


// function nameString(name){
// 	let b = "Edabit";
//     let result = name + b;
// 	return result;
// }
// nameString("abebe");

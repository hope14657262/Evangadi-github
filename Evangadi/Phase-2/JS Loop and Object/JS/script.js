console.log("hellword")
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.
function first10integers() {
for (i = 1; i <= 10; i++)
{
console.log(i);
}
}
first10integers();


// for gemini ia
// function printNumbers() {
//     for (let i = 1; i <= 10; i++) {
//       console.log(i);
//     }
//   }

//   printNumbers();

// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
function printNextFive(number)
{
for(i = 1 ;i <= 5; i++)
{
console.log(number + i)
}
}
// Test case:
printNextFive(7);

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
function prints_sum_next_Ten(num){
let  sum = 0;
    for(i = 1; i <= 10; i++){
        sum  += num + i;
    }
        console.log(sum)   
    
}
prints_sum_next_Ten(7)






// Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
function  prints_array_element(array){
    for(i = 0;i < array.length;i++){
        console.log(array[i]);
    }
    }
    let myarray = [1, "Hello", 8, 44];
    prints_array_element(myarray);

    // function printArrayElements(array) {
    //     // Iterate over each element in the array
    //     for (let i = 0; i < array.length; i++) {
    //       // Print the current element
    //       console.log(array[i]);
    //     }
    //   }
                                                            //  gemini ai
    //   // Example usage:
    //   const myArray = [1, "Hello", 8, 44];
    //   printArrayElements(myArray);


//     Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

function prints_array_length(array){
    let count = array.length;
    console.log(count);

}
// Test case 1
let case1 = [1, "Hello", 8, 44];
prints_array_length(case1);
// Test case 2
let case2 = ["world", 13];
prints_array_length(case2);

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
function print_array_sum(array){
     let sum = 0
    for(i = 0; i < array.length;i++)
        {
              sum += array[i];
    }
    console.log(sum);
}
// Test case 4
let case4 = [5, 6, 99, 8, 76, 4, 68, 44];
print_array_sum(case4);
// Test case 5
let case5 = [3, 0];
print_array_sum(case5);
//  Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

function  print_array_oddeven_sum(array){
    let even = 0
    let odd = 0
    for(i = 0; i < array.length;i++)
        {
            if (array[i] % 2 === 0) 
            {
            even += array[i];
            }
           else 
                      {
                         odd += array[i];
              }
}
    // console.log(even);
    // console.log(odd);
    console.log(even - odd);
}
// Test case 6
let case6 = [5, 6, 99, 8, 76, 4, 68, 44];
print_array_oddeven_sum(case6);

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
function print_array_even_idex(array){

    for(i = 0; i < array.length;i++){
        if (i % 2 == 0){
            let even = array[i];
            console.log(even); 
        }
    }
}
// Test case 7
let case7 = [5, 6, 99, 8, 76, 4, 68, 44];
print_array_even_idex(case7);
// Test case 8
let case8 = [11, "Sam", 3, 7, "car"]
print_array_even_idex(case8);

// Questions on built in JavaScript methods
// ***********************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];


// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method,
function print_array_removes_last_add(array){
    array.pop();
    array.push("32");
    console.log(array);
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
print_array_removes_last_add(sampleArray);

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

function print_array_sort(array) {
    // Sort the array in ascending order
    array.sort((a, b) => a - b);
    
    // Print the sorted array to the console
    console.log(array);
}
// Example usage:
const myArray = [5, 6, 99, 8, 76, 4, 68, 44];
print_array_sort(myArray);





// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

let evangadiClass = {
    lengthOfCourse: "1 Month",
    website: "https://www.evangadi.com/",
    isChallenging: false,
    topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
    students: [
    {
    name: "Abebe",
    age: 34,
    sex: "M"
    },
    {
    name: "Kebede",
    age: 44,
    sex: "M"
    },
    {
    name: "Almaz",
    age: 27,
    sex: "F"
    },
    {
    name: "Challa",
    age: 22,
    sex: "M"
    },
    {
    name: "Chaltu",
    age: 19,
    sex: "F"
    }
    ]
    }

//     Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
evangadiClass.lengthOfCourse = "5 Month";
 console.log(evangadiClass);

//  Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
evangadiClass.topicsCovered[4] = "Bootstrap"
console.log(evangadiClass);

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console
function calculateAverageAge(evangadiClass) {
    // Get the students array from the object
    let students_in_class = evangadiClass.students;
  
    // Check if there are any students
    if (students_in_class.length === 0) {
      console.log("There are no students in the class.");
      return;
    }
  
    // Calculate the sum of all ages
    // let totalAge = students.reduce((sum, student) => sum + student.age, 0);
   // Initialize a variable to store the total age
   let totalAge = 0;
  
   // Loop through each student and add their age to the total
   for (let i = 0; i < students_in_class.length; i++) {
     totalAge += students_in_class[i].age;
   }
    // Calculate the average age
    let averageAge = totalAge / students_in_class.length;
  
    // Print the result on the console
    console.log("The average age of the class is:", averageAge);
  }
  // Call the function with the evangadiClass object
  calculateAverageAge(evangadiClass);



//   Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

function percentage_of_male(evangadiClass){
        // Get the students array from the object
    let male = evangadiClass.students;
    let percentage = 0
    for (let i = 0; i < male.length; i++) {
        if(male[i].sex === "M"){
            percentage += 1;
            //  percentage++;
        }
        
      }
let total_percentage_of_male = percentage/male.length *100

console.log("The percentage_of_male in  the class is:", total_percentage_of_male.toFixed(2) + "%");


}
percentage_of_male(evangadiClass);

// Question 15: Test the divisors of three

// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
function print_between_low_high(low, high){
    for (let i = low; i <= high; i++) {
     
        if(i % 3 === 0 )
        {
            console.log(i +"  div3");
        }
        console.log(i);
    }

}
print_between_low_high( 10,20);

// function checkDivisibility(low, high) {
//     for (let i = low; i <= high; i++) {
//       console.log(i, i % 3 === 0 ? "div3" : "");
//     }
//   }
//   // Example usage:
//   checkDivisibility(1, 15);



// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
function print_fizz_buzz(){
    for (let i = 1; i <= 100; i++) {
     if (i  % 15 === 0  ) {
            console.log("fizzbuzz");
        }
        else if(i  % 3 === 0){
        console.log("fizz");
        }
        else if(i % 5 == 0) {
           let  buzz = i;
            console.log("buzz");
        }
        else
        console.log(i)
    }
    }
print_fizz_buzz();

// Question 19: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.
function evens_number(num){
       // Convert the number to a string
    for (let i = 0; i < num.length; i++) {
        if(num[i] % 2 !== 0)  {
            console.log(0);
            return;
        }
    }
console.log(1) 
}
evens_number("424")

// function isEvens(num) {
//     // Convert the number to a string
//     const numStr = num.toString();
  
//     // Iterate through each digit
//     for (let i = 0; i < numStr.length; i++) {
//       // Check if the digit is odd
//       if (parseInt(numStr[i]) % 2 !== 0) {
//         console.log(0); // Not an Evens number
//         return;
//       }
//     }
  
//     console.log(1); // It's an Evens number
//   }
  
//   // Example usage:
//   isEvens(2426); // Output: 1
//   isEvens(3224); // Output: 0
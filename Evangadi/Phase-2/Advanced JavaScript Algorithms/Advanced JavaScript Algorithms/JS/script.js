console.log("hello word");
// Algorithm writing (solving algorithmic problems) for video
function showhiddenword(a){
let hiddenword = ""
for(let i = 0; i <= a.length; i++) {
    let  letter = a.charAt(i);
    if(letter !== letter.toUpperCase()){
        hiddenword = hiddenword + letter;
    }
}
return hiddenword;
}
// Test
let word1 = showhiddenword("UcUNFYGaFYFYGtNUH") //➞ "cat"
let word2 = showhiddenword("bEEFGBuFBRrHgUHlNFYaYr")// ➞ "burglar"
let word3 = showhiddenword("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"); //➞ "embezzlement"
console.log(word1);
console.log(word2);
console.log(word3);
// aquation for video creae a function  that return true if the ferist array can be nest  inside the second
function print_nested_array(arr1,arr2){

    // Find the minimum and maximum values of each array
    let min1 = Math.min(...arr1);
    let  max1 = Math.max(...arr1);
     let  min2 = Math.min(...arr2);
     let max2 = Math.max(...arr2);
  
    // Check if arr1's min is greater than arr2's min and arr1's max is less than arr2's max
    return min1 > min2 && max1 < max2;
  }
  let arr1 = [1, 2, 3, 4];
  let arr2 = [0, 6];
 let arr3 = [6, 7, 8];
let nest = print_nested_array(arr1,arr2)
console.log(nest);
let nest1 = print_nested_array(arr1,arr3)
console.log(nest1);
// in other way to print the following 

function canBeNested(arr1, arr2) {
    // Find the minimum and maximum values of each array
    let array1 = arr1.sort();
    let array2 = arr2.sort();
    let min1  =  array1[0];

    let max1 =  array1[arr1.length - 1];
    let min2 = array2[0];
    let max2 = array2[arr2.length - 1];
    // Check if arr1's min is greater than arr2's min and arr1's max is less than arr2's max
    return min1 > min2 && max1 < max2;
  }
let bb = canBeNested([1, 2, 3, 4],[0, 6])
console.log(bb)




function isPrime(num){
    if (num <= 1) return false;
     if (num === 2) return true;
    if(num % 2 === 0)return false;
//cheke is prime
for (let i = 3; i * i <= num; i++) {
      if (num % i === 0)  return false;
    }
    return true;
}
// let prime = isPrime(5)
// console.log(prime);

// magic funcation
function ismagic(arry){
let sum = 0
for (let i = 0; i < arry.length; i++){
  let Pri = isPrime(arry[i]);
  if (Pri){
   // console.log(`arry[i]`, "is a prime number");
    sum += arry[i];
  }
}
  if(sum === arry[0])
  {return 1;}
  {return 0;}
}

let check = ismagic([21,3,7,9,11,4]);
console.log(check)

// how to sort the array in video
function issort(array){
  let issorted = true;
  while (issorted){
    issorted = false;
    for (let i  = 0; i  < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        issorted = true;
        let temp = array[i ];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
return array;
}
let result = issort([5,3,8,1,2]);
console.log(result);


         //  Advanced JavaScript Algorithms - practice exercise


// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
                            

// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// frist write a check the array index where is 
// and find the even index 
// the array index even and the array element the index is  if even the print the array 
// elese check the second array even index check   array  element is even /odd then if even print the consolelog

//  write the sudo code
// let starte writting the sudo code and print out  
// frist define a function and take the argument and 
// function print_even_index(array)
//  print the evenindex  using by for loop 
//  for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
//  }
//  if the indexelement even printe the console log and in the array 

function getOnlyEvens(arr) {
  const evenIndexes = arr.filter((_, index) => index % 2 === 0);
  const evenNumbers = evenIndexes.filter(num => num % 2 === 0);
  console.log(evenNumbers);
}
// Test cases
getOnlyEvens([1, 2, 3, 6, 4, 8]); // Output: [4]
getOnlyEvens([0, 1, 2, 3, 4]); // Output: [0, 2, 4]  '}  [poiuguyytytrewq]
              
// function print_even_index(array){
//   // let evenarray = []
//   even = true
//   while (even) {

// for(let i = 0; i <= array.length; i++){
//  let sum =  i;
// //  array[i];
//   if (sum % 2 === 0){
//    return sum ;
//     //evenarray += element[i]
//   //  return evenarray
//   } 
//   //return evenarray 
// }
// }
// // return array[i]
// }
// let even_index = print_even_index([1, 2, 3, 6, 4, 8]);
// console.log(even_index)
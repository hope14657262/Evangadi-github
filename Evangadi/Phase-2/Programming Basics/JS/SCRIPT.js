console.log(`HELLO WORLDI!!!!!!`, );

// Question 1: Find out the answers for these by displaying it on the console. You will need to
// compare the value on the left of the operator with the value on the right. Please note that
// the answer for each question below should be either True or False.

// A. 24 > 3
// B. 2 < "12"
// C. 0 == 2
// D. 2.0 === 2
// E. 2.0 == "2"
// F. 2 < "John"
// G. 2 > "John"
// H. "2" < "2"
// I. "2" > "12"
// J. 1 == 1 || 3 == 2 || 3 == 7
// K. 1 == 1 && 2 == 2 && 3 == 7
// L. 1 == 1 || 2 == 2 && 3 == 7
// M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")



// number A
let a = 24;
var b = 3;
result1 = a > b;
console.log(result1);
// number B
let d = 2
let e = "12"
result2 =  d < e
console.log(result2);
// number C
let g = 0
let h = 2
result3 = g == h
console.log(result3);
// number D
let i = 2.0
let j = 2
result4 = i === j
console.log(result4);
// number E
let k = 2.0
let l = "2"
result5 = k == l
console.log(result5);
// number F
let m = 2
let n = "John"
result6 = m < n
console.log(result6);
// number G
let o = 2
let p = "John"
result7 = o > p
console.log(result7);
// number H
let q = "2"
let r = "2"
result7 = q < r
console.log(result7);
// number I
let s = "2"
let t = "12"
result8 = s > t
console.log(result8);
// number J
let u = 1
let w = 3
let x = 2
let y = 7
statmet1 = u == u;
statmet2 = w == x;
statmet3 = w == y;
statmet4 = statmet1 || statmet2;
result9 = statmet4 || statmet3;
console.log(result9);
// number K
statmet5 = x == x;
statmet6 = statmet1 && statmet5;
result10 = statmet6 && statmet3;
console.log(result10);
// number L
statmet7 = statmet1 || statmet5;
result11 = statmet7 && statmet3;
console.log(result11);
// number M
let Z = true;
let AA = "31"
let AB = "9"
let AC = 10
let AD = 5
let AE = "2"
let AF = "two"
let AG = 1
let AH = "1"
let AI = 0
statmet8 = AG == Z
statmet9 = AI > Z
statmet10 = AA > AB
statmet11 = AC > AD 
statmet12 = AE == AF
statmet13 = AG == AH
statmet14 = statmet12 || statmet13;
statmet15 = !statmet14
//NEW
statmet16 = statmet8 && statmet9;
statmet17 = statmet16 || statmet10;
statmet18 = statmet17 || statmet11;
result12 = statmet18 || statmet15;
console.log(result12);



// Question 2: Answer the following questions. Make sure to think about each question and
// try to solve it in your brain before you see the result on the console.
// 1. Which expression returns true?
// A/ ‘1’ === 1
// B/ 1 == 1
// C/ 1 === 1
// D/ B and C from above
// 2. What is the value of x in this statement?
// let x = (1 == true);
// A/ 1
// B/ true
// C/ false
// D/ undefined
// 3. What is the value of y from the following statements?
// let x = 10;
// let y = (x > 5) && (x < 15)
// A/ 10
// B/ 5
// C/ 15
// D/ true
// 4. What is the value of x from the following statements?
// let x = 5;
// x += 3;
// A/ 3
// B/ 8
// C/ 15
// D/ 5
// 5. What is the value of y from the following statements?
// let x = 10;
// let y = x++;
// A/ 10
// B/ 11
// C/ 12
// D/ 13
// 6. What is the value of y in the following statements?
// let x = 1;
// let y = (x !== 2);
// A/ 1
// B/ 2
// C/ false
// D/ true
// 7. What is the output of (+”2”+2)?
// 8. What is the output of (7 % 3)?
// 9. What is the output of (2+true)?





// answer  qation number two

// 1 D 
// 2 B 
// 3 D 
// 4 B 
// 5 A 
// 6 D 

// 7 THEER IS NO MINIG
// 8  1
let hana = 7
let selam = 3
hope = hana % selam
console.log(hope);
// 9 3
let sami = 2
let sura = true
natty = sami + sura
console.log(natty);
// Question 3:
// ● Write a simple script that adds 1 and 2 and displays the result on the console
// ● Use variables a, b & c
// ● Use "let" to declare the variables
// ● Use the formula c = a + b
// ● Display the value of c on console
let abebe = 1;
let kebede = 2;
 sum = abebe + kebede
 console.log(sum);


//  Question 4:
// ● Create a variable to hold your first name
// ● Create another variable to hold your last name
// ● Create a third variable to hold your full name
// ● Assign the value of your first name and last name to the first two variable
// ● Use "+" to concatenate your first name and last name to assign the result to your last name's
// variable
// ● Don't forget to include space between your first and last name
// ● Display the value of your full name on the console
let firstName = "TESFA"
let lastName = "AYALEW"
let space = " "
fullname = firstName  +  lastName;
console.log(fullname);
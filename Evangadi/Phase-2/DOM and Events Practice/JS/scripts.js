console.log("hello world")
//question one one
// JavaScript file is correctly linked.
// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.
//
//
// Hint: Use the "textContent" property to select the content

            // let sample = document.getElementById("sample1")
            // console.log(sample);
            // console.log(sample.textContent);

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)


            //let question2 = document.getElementById("techCompanies")
             //console.log(question2);



// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.
// let question2_2 = document.querySelector("#techCompanies");
// console.log(question2_2);

// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total
let question2_3 = document.querySelectorAll("#techCompanies li");
 let summ = question2_3.length;
console.log(summ);
//2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
let question2_4 = document.getElementsByClassName("red");
console.log(question2_4);
let question2_4_1 = document.querySelectorAll(".red");
console.log(question2_4_1);

// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console
let Create = document.createElement("li");
console.log(Create);
Create.innerText = "Facebook"

// 2.6 Give the newly created element a class of "blue" using JavaScript

Create.className = "blue"
// 2.7 Append the newly created element next to the the "Sony" li element
let parent = document.getElementById("techCompanies");
console.log(parent);
parent.append(Create);
// let = referenceElement = document.getElementById("two");
// referenceElement.after(Create);
// referenceElement.before(Create);

// 2.8 How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div
// Assuming you have an HTML structure like this:
// <div id="techCompanies">
//   <ul>
//     <li class="blue">Google</li>
//     <li>Apple</li>
//     <li class="blue">Microsoft</li>
//     //   </ul>
// </div>
// <div id="blueCompanies"></div>

// Get a reference to the "techCompanies" div
let techCompaniesDiv = document.getElementById("techCompanies");

// Get all the "li" elements within the "techCompanies" div
let techCompanies = techCompaniesDiv.querySelectorAll("li");

// Initialize a counter for blue companies
let blueCompanyCount = 0;

// Iterate through each tech company
techCompanies.forEach((company) => {
  // Check if the company has the "blue" class
  if (company.classList.contains("blue")) {
    blueCompanyCount++;
  }
});

// Get a reference to the "blueCompanies" div
let  blueCompaniesDiv = document.getElementById("blueCompanies");
console.log(blueCompaniesDiv)
// Display the result in the "blueCompanies" div
blueCompaniesDiv.textContent = `"Number of blue companies: ${blueCompanyCount}`;


// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.
// function background_color_change(){
//   document.body.style.backgroundColor = "#99ecff"
// }
// Traditional:
// const hello = function() {
// return "Hello World!";
// }
// Arrow:
// const hello = () => {
// return "Hello World!";

 const  background_color_change = () => {
  document.body.style.backgroundColor = "#99ecff";
}
let  no_change_background_color = () => {
  document.body.style.backgroundColor = ""
 }


//  Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form
 let form = document.getElementById("adder")
 form.addEventListener("submit", function (e) {
  e.preventDefault();
  //let num1Input = document.getElementsByClassName("form-values")
  let firstvalueInput = document.getElementById("firstvalue")
  let secondvalueInput = document.getElementById("secondvalue")
  let num1 = parseFloat(firstvalueInput.value);
  let num2 = parseFloat(secondvalueInput.value);
   // Check if any input field is empty
   if(firstvalueInput.value.trim() === "" || secondvalueInput.value.trim() === "") {
    // Set background color of empty input field(s) to red
    firstvalueInput.value.trim() === "" ? firstvalueInput.style.backgroundColor = "red" : firstvalueInput.style.backgroundColor = "";
    secondvalueInput.value.trim() === "" ? secondvalueInput.style.backgroundColor = "red" : secondvalueInput.style.backgroundColor = "";

    //Display error message
    let resultDiv = document.getElementById("sum");
    resultDiv.textContent = "Please enter values in both fields.";
    return; // Exit the function
  }
  if(isNaN(num1) || isNaN(num2)){
        // Display error message
        let resultDiv = document.getElementById("sum");
        resultDiv.textContent = "Please enter numerical values only";
      }
      else{
        // Calculate the sum
        let sum = num1 + num2;
        // Display the result on the console
    console.log("The sum is:", sum);

    // Display the result underneath the form
    let resultDiv = document.getElementById("sum");
    resultDiv.textContent = "The sum is: " + sum;

  }
})
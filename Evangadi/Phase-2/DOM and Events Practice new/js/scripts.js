console.log("hello world!!")
// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.
// Hint: Use the "textContent" property to select the content
let a = document.getElementById("sample1")
console.log(a.textContent)
// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2"
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)

let b = document.getElementById("techCompanies")
console.log(b)
// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.

let c = document.querySelector("#techCompanies")
console.log(c)
// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.
let d = document.querySelectorAll("#techCompanies li")
let cout = d.length;
console.log(cout)
// 2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
let f = document.querySelectorAll(".red")
console.log(f)
let g = document.getElementsByClassName("red")
console.log(g)
// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console
let h = document.createElement("li")
h.textContent = "facebook";
console.log(h)
// 2.6 Give the newly created element a class of "blue" using JavaScript
h.className = "blue"
// 2.7 Append the newly created element next to the the "Sony" li element
//let i = document.getElementsById("techCompanies")
b.appendChild(h)
// How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div.

// Count the number of blue companies
const blueCompanyCount = techCompanies.reduce((count, company) => {
    return company.label === "blue" ? count + 1 : count;
  }, 0);
 


  // Get the "blueCompanies" div element
  const blueCompaniesDiv = document.getElementById("blueCompanies");

  // Create a new paragraph element to hold the result
  const resultParagraph = document.createElement("p");

  // Set the text content of the paragraph
  resultParagraph.textContent = 'Number of blue tech companies: ${blueCompanyCount}';

  // Append the paragraph to the "blueCompanies" div
  blueCompaniesDiv.appendChild(resultParagraph);
  
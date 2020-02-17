//The Document Object Model (DOM) is the interface between Javascript and HTML + CSS

//The browser turns every HTML tag into a Javascript object that we can manipulate
//These objects are all stored inside of the Document object

//SELECT an element and then MANIPULATE
var h1 = document.querySelector("h1");
h1.style.color = "pink";

//var body = document.querySelector("body");
var isBlue = false;
var isRed = false;
setInterval(function() {
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
  isBlue = !isBlue;
}, 1000);

//Methods: 
// The document comes with methods for selecting elements. They are: 

//Takes in ID name and return element with that ID
document.getElementsById("highlight");

// Takes in class name and returns element with that class name 
document.getElementsByClassName("bolded");

// Returns a list of elements of a given tag name h1, li etc
document.getElementsByTagName("h1");

//Returns the first element that matches a given CSS style selector
var li = document.querySelector("#highlight"); //you need the hashtag to select an ID for queryselector
var liBold = document.querySelector(".bolded"); //you need the period to select a class

//Returns a list of elements that matches a given CSS Style selector
var lis = document.querySelectorAll("li");

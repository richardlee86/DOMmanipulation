//The Style property is one way to manipulate an element's style
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//It is recommended for styles to be defined in a separate file or files. The style property allows for quick styling such as for testing purposes.

//Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS

var tag = document.getElementById("highlight");
//Add the new class to the selected element
tag.classList.add("some-class");

//classList is a read-only list that contains the classes for a given element. it is not an array

var newTag = document.querySelector("h1");

//Add a class to the selected element
tag.classList.add("another - class");

//Remove a class
tag.classList.remove("another-class");

//Toggle a class on or off
tag.classList.toggle("another-class");

var tag = document.querySelector("p");

//Retrieve the text content
tag.textContent;

//Alter text content
tag.textContent = "This is a manipulated paragraph" //This method will remove any inner HTML tags contained in the element

//innerHTML is similar to textContent but it will return a String of all the HTML contained in a given element

var tag = document.querySelector("p");

tag.innerHTML;
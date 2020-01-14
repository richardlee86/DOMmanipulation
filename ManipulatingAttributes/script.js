//Use getAttribute() and setAttribute() to read and write attributes like src or href
var link = document.querySelector("a");
link.getAttribute("href"); // "www.google.com"

//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "http://www.facebook.com");

//TO CHANGE THE IMG SRC
var img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
);

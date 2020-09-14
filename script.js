// this puts the current Date and time on the top of the page.
// creates a variable for date
var date = new Date();
// creates variable for n
// finds the current date and turns it into a string
var n = date.toDateString();
// creates variable for N
// finds the current time and turns it into a string
var time = date.toTimeString();
// pulls the div from the html to then display the current date and time on the page
document.getElementById('time').innerHTML = n + '' + time;

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click the save button for that timeblock
// trying to get jQUery to work but saw that it could be done on the HTML. jQuery is on the 
// var todo = document.querySelector(".col-md-10");

// $(document).ready(function() {
//         $(".saveBtn col-md-1").click(function() {
//         var
//         $(".saveBtn col-md-1").html();
//     });

//   });

// I was first doing this is javascript until I realized I had to do in jQuery
// var saveBtn = document.querySelector(".saveBtn col-md-1");
// renderLastRegistered();

// function displayMessage(type, message) {
//   todoSec.textContent = message;
//   todoSec.setAttribute("class", type);
// }

// function renderLastRegistered() {
//     var todo = document.getElementsByClassName("todo"); {
//         return;
//     }
//     todo.textContent =
// }
// // THEN the text for that event is saved in local storage
// var todo = document.getElementsByClassName("col-md-10")
// localStorage.setItem("saveBtn", todo);
// document.getElementsByClassName("col-md-10").innerHTML = localStorage.getItem("saveBtn");

// WHEN I refresh the page
// THEN the saved events persist
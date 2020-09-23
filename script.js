$(document).ready(function () {
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

// I had been looking at different ways to save the text to local storage. Had a hard time getting it to save it. console.log does not show any errors but does not show anything

    var saveBtn = $('<button>');
    var todoText = $('<textarea>').text("");

    saveBtn.attr('data-let', letters[enter]);
    saveBtn.text(letters[enter]);
    $('<textarea>').append(todoText);
    $('<button>').append(saveBtn);
    $(saveBtn).append(todoText);
  
    saveBtn.on("click", function (event) {
      event.preventDefault();

      console.log("hello");
      localStorage.setItem("entry", saveBtn)

    });
  });

// found this as an example will see what i can work from it. 

  // // variable to store and loop through scheduler
// var myDay = [
//     {
//         id: "0",
//         hour: "09",
//         time: "09",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "1",
//         hour: "10",
//         time: "10",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "2",
//         hour: "11",
//         time: "11",
//         meridiem: "am",
//         reminder: ""
//     },
//     {
//         id: "3",
//         hour: "12",
//         time: "12",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "4",
//         hour: "01",
//         time: "13",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "5",
//         hour: "02",
//         time: "14",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "6",
//         hour: "03",
//         time: "15",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "7",
//         hour: "04",
//         time: "16",
//         meridiem: "pm",
//         reminder: ""
//     },
//     {
//         id: "8",
//         hour: "05",
//         time: "17",
//         meridiem: "pm",
//         reminder: ""
//     },
    
// ]

// // gets data for the header date
// function getHeaderDate() {
//     var currentHeaderDate = moment().format('dddd, MMMM Do');
//     $("#currentDay").text(currentHeaderDate);
// }

// // saves data to localStorage
// function saveReminders() {
//     localStorage.setItem("myDay", JSON.stringify(myDay));
// }

// // sets any data in localStorage to the view
// function displayReminders() {
//     myDay.forEach(function (_thisHour) {
//         $(`#${_thisHour.id}`).val(_thisHour.reminder);
//     })
// }

// // sets any existing localStorage data to the view if it exists
// function init() {
//     var storedDay = JSON.parse(localStorage.getItem("myDay"));

//     if (storedDay) {
//         myDay = storedDay;
//     }

//     saveReminders();
//     displayReminders();
// }

// // loads header date
// getHeaderDate();

// // creates the visuals for the scheduler body
// myDay.forEach(function(thisHour) {
//     // creates timeblocks row
//     var hourRow = $("<form>").attr({
//         "class": "row"
//     });
//     $(".container").append(hourRow);

//     // creates time field
//     var hourField = $("<div>")
//         .text(`${thisHour.hour}${thisHour.meridiem}`)
//         .attr({
//             "class": "col-md-2 hour"
//     });

//     // creates schdeduler data
//     var hourPlan = $("<div>")
//         .attr({
//             "class": "col-md-9 description p-0"
//         });
//     var planData = $("<textarea>");
//     hourPlan.append(planData);
//     planData.attr("id", thisHour.id);
//     if (thisHour.time < moment().format("HH")) {
//         planData.attr ({
//             "class": "past", 
//         })
//     } else if (thisHour.time === moment().format("HH")) {
//         planData.attr({
//             "class": "present"
//         })
//     } else if (thisHour.time > moment().format("HH")) {
//         planData.attr({
//             "class": "future"
//         })
//     }

//     // creates save button
//     var saveButton = $("<i class='far fa-save fa-lg'></i>")
//     var savePlan = $("<button>")
//         .attr({
//             "class": "col-md-1 saveBtn"
//     });
//     savePlan.append(saveButton);
//     hourRow.append(hourField, hourPlan, savePlan);
// })

// // loads any existing localstorage data after components created
// init();


// // saves data to be used in localStorage
// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//     myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
//     console.log(saveIndex);
//     saveReminders();
//     displayReminders();
// })


// trying different ways to save the text

// $(":button").click(function(event){
//   var todoText = $("<textarea">).val("");

//   if(event.which === ""){

//   // $(this).val("");
//   $("<textarea>").append($(todoText));
// }
// });


// });

//     if(event.which === ""){
//     var todoText = $(this).val();
//     $(this).val("");
//     $("<textarea>").append($(todoText));
//   }
// });


// });

// var data = getData('')
//     $('#saveBtn').on('click', function(){
//        var save = $(this).attr('class')
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });



//     $(".saveBtn col-md-1").click(function() {
//     var
//     $(".saveBtn col-md-1").html();
// });

// }); 

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
"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Tutorial Case

   Author: 
   Date:  

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

/* set the date displayed in the calendar */
var thisDay = new Date("September 24, 2021");

/* write the calendar to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* function to create the calendar */
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/* function to write the calendar caption */
function calCaption(calDate) {
   // monthName array contains the list of month names
   var monthName = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
   // determine the current month
   var thisMonth = calDate.getMonth();
   // determine the current year
   var thisYear = calDate.getFullYear();
   // write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/* function to write a table row of weekday abbreviations */
function calWeekdayRow() {
   var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var rowHTML = "<tr>";

   // loop through the dayName array to write each day
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }
   rowHTML += "</tr>";
   return rowHTML;
}

/* Function to calculate the number of days in the month */
function daysInMonth(calDate) {
    // Array of days in each month
    var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    // Extract the four digit year and month value
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();

    //revise the days in february for leap years
    if (thisYear % 4 === 0 && (thisYear % 100 !== 0 || thisYear % 400 === 0)) {
  dayCount[1] = 29;
}

    // Return the number of days for the current month
    return dayCount[thisMonth];
}

/* Function to write table rows for each day of the month */
function calDays(calDate) {
    // Determine the starting day of the month
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();

    // Write blank cells preceding the starting day
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
    htmlCode += "<td></td>";
    }

    // Write cells for each day of the month
   var totalDays = daysInMonth(calDate);

var highlightDay = calDate.getDate();
for (var i = 1; i <= totalDays; i++) {
    day.setDate(i);
    weekDay = day.getDay();
    if (weekDay == 0) htmlCode += "<tr>";
    if (i == highlightDay) {
        htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
    } else {
    htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
    }
    if (weekDay == 6) htmlCode += "</tr>";
}
    return htmlCode;
}  // closes the for loop's parent function

var dayEvent = new Array();

dayEvent[1] = "";
dayEvent[2] = "<br /><a href="#">Classic Cinema: Wings</a><br />7 pm <br />$5";
dayEvent[3] = "<br /><a href="#">The Future is Prologue</a><br />8 pm<br />$18/$24/$36";
dayEvent[4] = "<br /><a href="#">American Favorites</a><br />7:30 pm<br />$24/$36/$48";
dayEvent[5] = "<br /><a href="#">Classics Brunch</a><br />11 am<br />$12";
dayEvent[6] = "<br /><a href="#">LMT Jazz Band</a><br />7 pm<br />$24";
dayEvent[7] = "";

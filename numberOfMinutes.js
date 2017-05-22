/*Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24 hr format ('hh:mm') as a string

dayAndTime(0) should return 'Sunday 00:00'
dayAndTime(-3) should return 'Saturday 23:57'
dayAndTime(45) should return 'Sunday 00:45'*/



var dayAndTime = function(minutes){
  var date = new Date("2017-05-21T00:00:00");
  var minute = date.getMinutes();
  var hours = date.getHours();
  var day = date.getDay();
  if (minutes < 0) {
    minutes = 10080 + (minutes%10080)
  }
  var min = minutes % 60;
  var hour = parseInt(minutes/60);
  if (hour > 23){
    var dayPassed = parseInt(hour / 24);
    date.setDate(date.getDate() + dayPassed);
    hour = hour % 24;
  }
  date.setHours(hours + hour);
  hours = date.getHours();
  hours = ("0" + hours).slice(-2);
  date.setMinutes(minute + min);
  minute = date.getMinutes();
  minute = ("0" + minute).slice(-2);

  var dayInString;
  switch(date.getDay()){
    case 0:
      dayInString = "Sunday";
      break;
    case 1:
      dayInString = "Monday";
      break;
    case 2:
      dayInString = "Tuesday";
      break;
    case 3:
      dayInString = "Wednesday";
      break;
    case 4:
      dayInString = "Thursday";
      break;
    case 5:
      dayInString = "Friday";
      break;
    case 6:
      dayInString = "Saturday";
      break;
  }

  console.log(dayInString + " " + hours + ":" + minute);

}

dayAndTime(-3);


/*Sample solution:
function dayAndTime(time) {
  // account for negative
  if (time < 0) {
    time = 10080 + (time%10080)
  }

  var hours = Math.floor(time / 60);
  var minutes = time % 60

  //format hh:mm
  var hh = pad(hours % 24, 2)
  var mm = pad(minutes, 2)
  var date = hh + ":" + mm
  var day = 'Sunday'

  // what day is it?
  var ahead = Math.floor(hours / 24) % 7

  switch(ahead) {
    case 1: day = 'Monday'
    break;
    case 2: day = 'Tuesday'
    break;
    case 3: day = 'Wednesday'
    break;
    case 4: day = 'Thursday'
    break;
    case 5: day = 'Friday'
    break;
    case 6: day = 'Saturday'
    break;
    default:
    day = 'Sunday'
  }
  console.log(day + " " + date )
}

// pad zero before numbers size < 2
function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length-size);
}

// Test cases
dayAndTime(0)
dayAndTime(-3)
dayAndTime(259180)
dayAndTime(-349000)
*/

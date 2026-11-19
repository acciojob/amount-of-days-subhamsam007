//your JS code here. If required.
function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year has 366 days
  } else {
    return 365; // Normal year has 365 day
  }
}

let n = parseInt(prompt("Enter a year"), 10);
alert(daysOfAYear(n));


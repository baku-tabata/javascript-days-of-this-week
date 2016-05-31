/*!
 * Javascript Days of the Week
 * https://github.com/baku-tabata/javascript-days-of-this-week
 * 
 * Copyright (c) 2016 Baku Tabata
 *
 * This program is free software.
 *
 * Date: Mon May 30 2016
 */
function getDaysOfThisWeek() {
  var today = new Date(),
      day = today.getDay(), /* 0..6 // Sun..Sat */
      firstDayOfWeekDelta = -1 * (day % 7),
      firstDayOfWeek = new Date(),
      daysOfThisWeek = [],
      i,
      d;
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() + firstDayOfWeekDelta);
  d = new Date(firstDayOfWeek);
  daysOfThisWeek[daysOfThisWeek.length] = new Date(d);
  for (i = 0; i < 6; i++) {
    d.setDate(d.getDate() + 1);
    daysOfThisWeek[daysOfThisWeek.length] = new Date(d);
  }
  return daysOfThisWeek;
}

// Usage example.
var daysOfThisWeek = getDaysOfThisWeek();

// Iterate through days of this week & dump date information.
var dayToDump;
for (var j in daysOfThisWeek) {
  dayToDump = daysOfThisWeek[j];
  console.log(j, dayToDump.toString());
}
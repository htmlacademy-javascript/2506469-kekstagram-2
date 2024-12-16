function isValidTime(timeStartDay, timeEndDay, timeStartMeet, timeMeet) {
  const timeStartDayArr = timeStartDay.split(':').map(Number);
  const timeStartDayMinutes = timeStartDayArr[0] * 60 + timeStartDayArr[1];

  const timeEndDayArr = timeEndDay.split(':').map(Number);
  const timeEndDayMinutes = timeEndDayArr[0] * 60 + timeEndDayArr[1];

  const timeStartMeetArr = timeStartMeet.split(':').map(Number);
  const timeStartMeetMinutes = timeStartMeetArr[0] * 60 + timeStartMeetArr[1];

  const timeMeetEndMinutes = timeStartMeetMinutes + timeMeet;

  return timeStartMeetMinutes >= timeStartDayMinutes && timeMeetEndMinutes <= timeEndDayMinutes;

}

console.log(isValidTime('08:00', '17:30', '14:00', 90)); // true
console.log(isValidTime('8:0', '10:0', '8:0', 120));     // true
console.log(isValidTime('08:00', '14:30', '14:00', 90)); // false
console.log(isValidTime('14:00', '17:30', '08:0', 90));  // false
console.log(isValidTime('8:00', '17:30', '08:00', 900)); // false



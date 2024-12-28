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




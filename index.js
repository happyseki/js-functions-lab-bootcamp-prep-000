// write your code below!
function happyHolidays(){
  return "Happy Holidays!";
}
happyHolidays("Happy Holidays!");

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo(you);

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
happyHolidaysTo(Independence, you);

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown("Mother's day", 20);
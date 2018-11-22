// write your code below!
function happyHolidays(){
  return "Happy Holidays!";
}
console.log(happyHolidays());

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
console.log(happyHolidaysTo(Jack));

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(days,holiday){
  return `It's ${days} days until ${holiday}!`;
}
// write your code below!
function happyHolidays(){
  return "happyHolidays";
}
happyHolidays();

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
console.log(happyHolidaysTo(Miya));

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
happyHolidaysTo(Thanksgiving, Miya);

function holidayCountdown(day,holiday){
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown(1, Thanksgiving);
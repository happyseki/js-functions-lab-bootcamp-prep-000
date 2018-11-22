// write your code below!
function happyHolidays(){
  console.log("happy Holidays!");
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
console.log(happyHolidaysTo(Miya));

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
console.log(happyHolidaysTo(Thanksgiving, Miya));

function holidayCountdown(day,holiday){
  return `It's ${days} days until ${holiday}!`;
}
console.log(holidayCountdown(1, Thanksgiving));
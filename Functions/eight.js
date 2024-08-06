function cal_Age(year){
  let cy= new Date().getFullYear()
  return cy-year;
}

let age1= cal_Age(1997);
console.log(age1);
console.log(cal_Age(2004))
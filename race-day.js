let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 26;

if (runnerAge>18 && earlyRegistration){
  raceNumber+=1000;}

if (runnerAge>18 && earlyRegistration){
  console.log(`Number ${raceNumber}, you will race at 9:30 am`);
}else if(runnerAge > 18 && !earlyRegistration){
  console.log(`Number ${raceNumber}, you will race at 11:00 am`);
}else if(runnerAge < 18){
  console.log(`Number ${raceNumber}, you will race at 12:30 pm`);
}else{
  console.log('See the registration desk');
}
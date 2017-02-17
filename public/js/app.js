// data and variable declarations
var timer;
var minutesLeft = 5;
var secondsLeft = 0;
var isOnBreak = false;
var numberOfBreaks = 0;
// Getting references to the DOM
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');
// Initialization Code
// EventListeners
  //
  startButton.addEventListener('click', start);
  render();
// Function Definititions
function start(){
  console.log(timer);
  if(!timer){
      timer = setInterval(tick, 1000);
  }
}
function tick(){
  if(secondsLeft === 0 && minutesLeft === 0){
    clearInterval(timer);
    timer = !timer;
    if(isOnBreak){
      numberOfBreaks += 1;
      resetWorkTime();
    } else {
      resetBreakTime();
    }
    isOnBreak = !isOnBreak;
    render();
    return;
  }
  decrementMinutes();
  decrementSeconds();
  render();
}
function decrementMinutes(){
  if(secondsLeft === 0){
    minutesLeft -= 1;
  }
}
function decrementSeconds(){
  if(secondsLeft == 0){
  secondsLeft = 59;
} else {
}
 secondsLeft -= 1;
 }
function render(){
  minutes.textContent = pad(minutesLeft);
  seconds.textContent = pad(secondsLeft);
}
function pad(num){
  if(num < 10){
  return `0${num}`;
  } else {
    return num;
  }
}
function resetWorkTime(){
  minuteLeft = 00;
  secondsLeft = 05;
}
function resetBreakTime(){
  if(numberOfBreaks < 3){
    minutesleft = 5;
  } else {
    minutesLeft = 15;
    numberOfBreaks = 0;
  }
    secondsLeft = 0;
}

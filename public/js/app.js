var Timer = {
  minutesLeft: 0,
  secondsLeft: 5,
  isOnBreak: false,
  numberOfBreaks: 0,
  init: function(){
    this.cacheDOM();
    this.addListeners();
    this.render();
  },
  cacheDOM: function(){
    this.minutes = document.querySelector('#minutes');
    this.seconds = document.querySelector('#seconds');
    this.startButton = document.querySelector('#start');
    this.pauseButton = document.querySelector('#pause');
    this.modal = document.querySelector('#myModal')
  },
  render: function(){
  this.minutes.textContent = this.pad(this.minutesLeft);
  this.seconds.textContent = this.pad(this.secondsLeft);
  },
  addListeners: function(){
    this.startButton.addEventListener('click', this.start.bind(this)); //the bind stament takes the meaning of "this" from add listeners and pushed that meaning tont the start function
    this.pauseButton.addEventListener('click', this.pause.bind(this));
  },
  start: function(){
      if(!this.timer){
          this.timer = setInterval(this.tick.bind(this), 1000);
      }
  },
  pause: function(){
    this.timer = clearInterval(this.timer);
  },
  tick: function(){
    if(this.secondsLeft === 0 && this.minutesLeft === 0){
      clearInterval(this.timer);
      this.timer = !this.timer;
      if(this.isOnBreak){
        this.numberOfBreaks += 1;
        this.resetWorkTime();
      } else {
        this.resetBreakTime();
      }
      this.isOnBreak = !this.isOnBreak;
      this.render();
      Push.create("Hello world!", {
      body: "How's it hangin'?",
      icon: 'https://cdn.pixabay.com/photo/2014/07/28/11/22/tape-403591_960_720.jpg',
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
    }
});
      return;
    }
    this.decrementMinutes();
    this.decrementSeconds();
    this.render();
  },
  decrementMinutes: function(){
    if(this.secondsLeft === 0){
      this.minutesLeft -= 1;
    }
  },
  decrementSeconds: function(){
    if(this.secondsLeft === 0){
     this.secondsLeft = 59;
    } else {
     this.secondsLeft -= 1;
    }
   },
  pad: function(num){
    if(num < 10){
    return `0${num}`;
    } else {
      return num;
    }
  },
  resetWorkTime: function(){
    this.minuteLeft = 00;
    this.secondsLeft = 05;
  },
  resetBreakTime: function(){
    if(this.numberOfBreaks < 3){
    this.minutesLeft = 5;
    } else {
      this.minutesLeft = 15;
      this.numberOfBreaks = 0;
    }
      this.secondsLeft = 0;
  },
};
Timer.init();
// data and variable declarations
// var timer;
// var minutesLeft = 5;
// var secondsLeft = 0;
// var isOnBreak = false;
// var numberOfBreaks = 0;
// Getting references to the DOM
// var minutes = document.querySelector('#minutes');
// var seconds = document.querySelector('#seconds');
// var startButton = document.querySelector('#start');
// Initialization Code
// EventListeners
  //
  // startButton.addEventListener('click', start);
  //render();
// Function Definititions
// function start(){
//   console.log(timer);
//   if(!timer){
//       timer = setInterval(tick, 1000);
//   }
// }
// function tick(){
//   if(secondsLeft === 0 && minutesLeft === 0){
//     clearInterval(timer);
//     timer = !timer;
//     if(isOnBreak){
//       numberOfBreaks += 1;
//       resetWorkTime();
//     } else {
//       resetBreakTime();
//     }
//     isOnBreak = !isOnBreak;
//     render();
//     return;
//   }
//   decrementMinutes();
//   decrementSeconds();
//   render();
// }
// function decrementMinutes(){
//   if(secondsLeft === 0){
//     minutesLeft -= 1;
//   }
// }
// function decrementSeconds(){
//   if(secondsLeft == 0){
//   secondsLeft = 59;
// } else {
// }
//  secondsLeft -= 1;
//  }
// // function render(){
// //   minutes.textContent = pad(minutesLeft);
// //   seconds.textContent = pad(secondsLeft);
// }
// function pad(num){
//   if(num < 10){
//   return `0${num}`;
//   } else {
//     return num;
//   }
// }
// function resetWorkTime(){
//   minuteLeft = 00;
//   secondsLeft = 05;
// }
// function resetBreakTime(){
//   if(numberOfBreaks < 3){
//     minutesleft = 5;
//   } else {
//     minutesLeft = 15;
//     numberOfBreaks = 0;
//   }
//     secondsLeft = 0;
// }

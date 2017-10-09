// defaultLongBreakInterval is just a counter,
// while defaultWorkDuration, defaultShortBreakDuration,
// and defaultLongBreakDuration are in minutes.
const defaultWorkDuration = 25; const defaultShortBreakDuration = 5;
const defaultLongBreakDuration = 15;
const defaultLongBreakInterval = 4;


function saveDefaultConfig(){
  localStorage.setItem('defaultWorkDuration', defaultWorkDuration);
  localStorage.setItem('defaultShortBreakDuration', defaultShortBreakDuration);
  localStorage.setItem('defaultLongBreakDuration', defaultLongBreakDuration);
  localStorage.setItem('defaultLongBreakInterval', defaultLongBreakInterval);
}

function shortBreak(){
  countDown(1, 'shortBreak');
}

function longBreak(){
  countDown(1, 'longBreak');
}

function workMode(){
  countDown(1, 'work');
}

function displayCountDown(time) {
    let secondsLabel = time.seconds;
    let minutesLabel = time.minutes;

    if (time.seconds == 60){
      secondsLabel = '00';
    }
    if (time.minutes.toString().length == 1){
      minutesLabel = '0' + time.minutes;
    }
    if (time.seconds.toString().length == 1){
      secondsLabel = '0' + time.seconds;
    }
    document.getElementById('minutes').innerHTML = minutesLabel.toString();
    document.getElementById('seconds').innerHTML = secondsLabel.toString();
    document.getElementById('mode').innerHTML = time.mode;
}

function countDown(m, mode){
  var seconds = 60;
  var minutes = m-1;

  function tick(){
    let time = {'seconds': seconds, 'minutes': minutes, 'mode': mode}
    displayCountDown(time);

    seconds--;
    if(seconds >= 0){
      setTimeout(tick, 1000);
    }else{
      if(minutes > 1){
        countDown(minutes-1, mode);
      }
    }
  }



  tick();
}

function workMode()
function shortBreak()
function longBreak()

const heading =document.getElementById('title');

heading.textContent = "Timer with Javascript";

// Timer with Javascript

class Clock{
   constructor ({template}) {
      this.template = template;
   }

   render = () => {
      let date = new Date();
      let hours = date.getHours();
      if(hours < 10){
         hours = '0' + hours;
      }
      let mins = date.getMinutes();
      if(mins < 10){
         mins = '0' + mins;
      }
      let secs = date.getSeconds();
      if(secs < 10){
         secs = '0'+ secs;
      }
      
      let result = this.template
               .replace('h', hours)
               .replace('m', mins)
               .replace('s', secs)
      console.log(result)

   }

   stop () {
      clearInterval(this.timer);
   }

   start () {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
   }
}

let myTimer = new Clock({template: 'h:m:s'});
// myTimer.start();
// myTimer.stop();

document.getElementById('display').innerHTML = hours + "h: " + minutes + "m: "+ secs +"s";

let start = document.getElementById('start');
start.addEventListener("click", startTimer);

function startTimer() {
   myTimer.start();
}

let stop = document.getElementById('stop');
stop.addEventListener("click", stopTimer);

function stopTimer() {
   myTimer.stop();
}


//Countdown timer

// Set the date we're counting down to
let countDownDate = new Date("May 29, 2023 12:00:00").getTime();

// Update the count down every 1 second
let countdown = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the countdown date
  let timeInterval = countDownDate - now;
    
  // Calculate time for days, hours, minutes and seconds.
  
  let days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
    
  // Render the result in the browser with id="display-date"
  document.getElementById("display-date").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // When the countdown is over, display time elapsed.
  if (timeInterval < 0) {
    clearInterval(countdown);
    document.getElementById("display-date").innerHTML = "TIME ELAPSED";
  }
}, 1000);
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
myTimer.start();
myTimer.stop();

let output = document.getElementById('output');

output.textContent = myTimer.start();

let start = document.getElementById('start');
document.addEventListener("click", startTimer);

function startTimer() {
  document.getElementById("start").innerHTML = "Start";
}

let stop = document.getElementById('stop');
document.addEventListener("click", stopTimer);

function stopTimer() {
  document.getElementById("stop").innerHTML = "Stop";
}
import CountdownTimer from "./js/timer.js"
import dataSet from "./js/date-maker"
dataSet()

const input = document.querySelector('#start')
const resetBtn=document.querySelector('#reset')
input.addEventListener('input', launchCountdown)
resetBtn.addEventListener('click', stopCountdown)

let new1= new CountdownTimer({
        selector: '#timer-1',
        targetDate: input.value,
    });

function launchCountdown() {
    new1.targetDate=input.value
  new1.start()
}
function stopCountdown() {
  new1.stop()
    input.value=''
}


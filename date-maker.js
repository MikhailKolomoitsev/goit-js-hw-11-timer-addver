const dateInput=document.querySelector('.date-input')
let todayDate = new Date().toISOString().slice(0, 10);
dateInput.min=`${todayDate}`
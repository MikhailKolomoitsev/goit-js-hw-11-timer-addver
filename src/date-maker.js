// import {format} from 'date-fns'
// let  date = format(new Date(2016, 0, 1))
// console.log(date);

export default function dataSet() {
    const dateInput = document.querySelector('.date-input')
    let todayDate = new Date().toISOString().slice(0, 10);
    dateInput.min = `${todayDate}`
}

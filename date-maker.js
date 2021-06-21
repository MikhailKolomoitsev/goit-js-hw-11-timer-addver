import { format, compareAsc } from 'date-fns'
console.log('helo');
console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'));
format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'
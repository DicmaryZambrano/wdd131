/*let first = 1 + 2;
let second = 2 * 2;
let third = 2 - 3;
let fourth = '2' + '2';
let variable = 'value'
let fifth = third + 3;

let compare = 2 === 4;

let number = third < fifth;

let isnot = 5 !== 6;

let comp = 5 < 10 && 5 > 0;

console.log("1-----")
console.log(first)
console.log("2-----")
console.log(second)
console.log("3-----")
console.log(third)
console.log("4-----")
console.log(fourth)
console.log("5-----")
console.log(variable)
console.log("6-----")
console.log(fifth)
console.log("7-----")
console.log(compare)
console.log("8-----")
console.log(number)
console.log("9-----")
console.log(isnot)
console.log("10-----")
console.log(comp)*/

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
/*
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i]);
  }
}
*//*
let loop = 0;
while (loop < studentReport.length) {
  if (studentReport[loop] < LIMIT) {
    console.log(studentReport[loop]);
  }
  loop++;
}*/

let i = 0;
do {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i += 1;
} while (i < studentReport[i]);

studentReport.forEach(report => {
  if (report < LIMIT) {
    console.log(report);
  }
});

for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
/* Footer Dates */

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

/*Hambuger menu*/

const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuItems.classList.toggle('active');
});


let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count++;
  }
});
if (count > 0) {
  console.log(accumulator / count);
} else {
  console.log("No scores reported.");
}
/* Footer Dates */

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

/*Hambuger menu*/

const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuItems.classList.toggle('active');
});

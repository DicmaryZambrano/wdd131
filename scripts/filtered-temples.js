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

/* Temples Array */

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Hamilton New Zealand",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 20",
    area: 45251,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"
  },
  {
    templeName: "Smithfield Utah",
    location: "Smithfield, Utah, United States",
    dedicated: "2026, Estimated Completion",
    area: 81000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/smithfield-utah-temple/smithfield-utah-temple-23671-main.jpg"
  },
  {
    templeName: "Spokane Washington",
    location: "Spokane, Washington, United States",
    dedicated: "1999, August, 21",
    area: 9969,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/spokane-washington-temple/spokane-washington-temple-30260-main.jpg"
  },
  {
    templeName: "Heber Valley Utah",
    location: "Heber City, Utah, United States",
    dedicated: "2010, December, 13",
    area: 87626,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/heber-valley-utah-temple/heber-valley-utah-temple-30547-main.jpg"
  },
  {
    templeName: "Huehuetenango Guatemala",
    location: "Huehuetenango, Guatemala",
    dedicated: "1980, December, 13",
    area: 10787,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/huehuetenango-guatemala-temple/huehuetenango-guatemala-temple-48801-main.jpg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Baja California, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, La Libertad, Peru",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717-main.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Ceará, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  }
];


function createTempleCard(temple) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");

  img.src = temple.imageUrl;
  img.alt = `${temple.templeName}`;
  img.loading = "lazy";
  img.height = 300;
  img.width = 300;
  figcaption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area} sq ft
  `;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
}

function displayTemples(templeList) {
  const templeGrid = document.getElementById("templeGrid");
  templeGrid.innerHTML = ""; // Clear any existing content
  templeList.forEach(temple => {
    const card = createTempleCard(temple);
    templeGrid.appendChild(card);
  });
}


document.querySelectorAll(".navbar-link a").forEach(item => {
  item.addEventListener("click", event => {
    const filter = event.target.textContent;

    switch (filter) {
      case "Old":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "New":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
        break;
      case "Large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case "Small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;
      case "Home":
      default:
        displayTemples(temples);
        break;
    }
  });
});


// Display all temples by default
displayTemples(temples);

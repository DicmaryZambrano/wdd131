/* Populate Home */

async function fetchPetsData() {
  const response = await fetch("scripts/pets.json");
  return await response.json();
}

function filterPets(data, types) {
  const selectedPets = [];
  types.forEach(type => {
    const pet = data.find(p => p.type === type);
    if (pet) {
      selectedPets.push(pet);
    }
  });
  return selectedPets;
}

function createPetCard(pet) {
  const petCard = document.createElement("div");
  petCard.classList.add("pet-card");

  const petImg = document.createElement("img");
  petImg.src = pet.image;
  petImg.alt = `Photo of ${pet.name}`;
  petImg.width = 400;
  petImg.height = 600;
  petImg.classList.add("pet-img");

  const petInfo = document.createElement("div");
  petInfo.classList.add("pet-info");

  const petName = document.createElement("strong");
  petName.textContent = pet.name;

  const petTypeIconBox = document.createElement("div");
  petTypeIconBox.classList.add("pet-icon-box");
  const petTypeIcon = createPetTypeIcon(pet.type);
  petTypeIconBox.appendChild(petTypeIcon);

  petInfo.appendChild(petName);

  petCard.appendChild(petImg);
  petCard.appendChild(petInfo);
  petCard.appendChild(petTypeIconBox);

  return petCard;
}

function createPetTypeIcon(type) {
  const petTypeIcon = document.createElement("img");
  petTypeIcon.classList.add("pet-type-icon");

  if (type === "bunny") {
    petTypeIcon.src = "images/bunny.svg";
    petTypeIcon.alt = "an icon of a bunny";
  } else if (type === "dog") {
    petTypeIcon.src = "images/dog.svg";
    petTypeIcon.alt = "an icon of a dog";
  } else if (type === "cat") {
    petTypeIcon.src = "images/cat.svg";
    petTypeIcon.alt = "an icon of a cat";
  } else if (type === "bird") {
    petTypeIcon.src = "images/parrot.svg";
    petTypeIcon.alt = "an icon of a bird";
  } else if (type === "ginea-pig") {
    petTypeIcon.src = "images/mouse.svg";
    petTypeIcon.alt = "an icon of a mouse";
  } else if (type === "rat") {
    petTypeIcon.src = "images/mouse.svg";
    petTypeIcon.alt = "an icon of a mouse";
  }

  petTypeIcon.width = 130;
  petTypeIcon.height = 130;

  return petTypeIcon;
}

document.addEventListener("DOMContentLoaded", function () {
  const petCardsContainer = document.getElementById("pet-cards");

  fetchPetsData()
    .then(data => {
      const selectedPets = filterPets(data, ["dog", "cat", "bunny"]);
      selectedPets.forEach(pet => {
        const petCard = createPetCard(pet);
        insertPetCard(petCard, petCardsContainer);
      });
    })
    .catch(error => console.error("Error fetching the pet data:", error));
});

function insertPetCard(petCard, container) {
  container.insertBefore(petCard, container.querySelector(".more-pets"));
}

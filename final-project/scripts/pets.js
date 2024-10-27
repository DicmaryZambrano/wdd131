async function fetchPetsData() {
  const response = await fetch("scripts/pets.json");
  return await response.json();
}

function createPetCard(pet) {
  const petCard = document.createElement("div");
  petCard.classList.add("pet-card");

  const petImg = document.createElement("img");
  petImg.src = pet.image;
  petImg.alt = `Photo of ${pet.name}`;
  petImg.width = 400;
  petImg.height = 600;
  petImg.loading = "lazy";
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

  petCard.addEventListener("click", () => showPetDetails(pet));

  return petCard;
}

function createPetTypeIcon(type) {
  const petTypeIcon = document.createElement("img");
  petTypeIcon.classList.add("pet-type-icon");

  switch (type) {
    case "bunny":
      petTypeIcon.src = "images/bunny.svg";
      petTypeIcon.alt = "an icon of a bunny";
      break;
    case "dog":
      petTypeIcon.src = "images/dog.svg";
      petTypeIcon.alt = "an icon of a dog";
      break;
    case "cat":
      petTypeIcon.src = "images/cat.svg";
      petTypeIcon.alt = "an icon of a cat";
      break;
    case "bird":
      petTypeIcon.src = "images/parrot.svg";
      petTypeIcon.alt = "an icon of a bird";
      break;
    case "ginea-pig":
    case "rat":
      petTypeIcon.src = "images/mouse.svg";
      petTypeIcon.alt = "an icon of a mouse";
      break;
  }

  petTypeIcon.width = 130;
  petTypeIcon.height = 130;

  return petTypeIcon;
}


function showPetDetails(pet) {
  const modal = document.getElementById("pet-detail-modal");
  document.getElementById("pet-detail-image").src = pet.image;
  document.getElementById("pet-detail-name").textContent = pet.name;
  document.getElementById("pet-detail-description").textContent = pet.description;
  document.getElementById("pet-detail-color").textContent = pet.color;
  document.getElementById("pet-detail-birth-date").textContent = pet.birth_date;

  document.getElementById("adopt-button").onclick = () => handlePetAction(pet, "adopted");
  document.getElementById("foster-button").onclick = () => handlePetAction(pet, "fostered");

  modal.style.display = "flex";
}

document.querySelector(".close-button").onclick = () => {
  document.getElementById("pet-detail-modal").style.display = "none";
};

function handlePetAction(pet, actionType) {
  if (!isFosterFormFilled()) {
    alert("Please fill out the foster form first.");
    return;
  }

  const adoptedStorageKey = "adoptedPets";
  const fosteredStorageKey = "fosteredPets";
  const adoptedPets = JSON.parse(localStorage.getItem(adoptedStorageKey)) || [];
  const fosteredPets = JSON.parse(localStorage.getItem(fosteredStorageKey)) || [];

  if (actionType === "adopted" && (adoptedPets.find(p => p.pet_id === pet.pet_id) || fosteredPets.find(p => p.pet_id === pet.pet_id))) {
    alert(`This pet is already ${fosteredPets.find(p => p.pet_id === pet.pet_id) ? 'fostered' : 'adopted'}.`);
    return;
  }

  if (actionType === "fostered" && (fosteredPets.find(p => p.pet_id === pet.pet_id) || adoptedPets.find(p => p.pet_id === pet.pet_id))) {
    alert(`This pet is already ${adoptedPets.find(p => p.pet_id === pet.pet_id) ? 'adopted' : 'fostered'}.`);
    return;
  }

  const storageKey = actionType === "adopted" ? adoptedStorageKey : fosteredStorageKey;
  const storedPets = actionType === "adopted" ? adoptedPets : fosteredPets;

  storedPets.push(pet);
  localStorage.setItem(storageKey, JSON.stringify(storedPets));
  alert(`Pet ${actionType} successfully!`);
}

function isFosterFormFilled() {
  return localStorage.getItem("fosterFormFilled") === "true";
}

document.addEventListener("DOMContentLoaded", async () => {
  const petCardsContainer = document.getElementById("adopt-cards");

  try {
    const pets = await fetchPetsData();
    pets.forEach(pet => {
      const petCard = createPetCard(pet);
      petCardsContainer.appendChild(petCard);
    });
  } catch (error) {
    console.error("Error fetching pets:", error);
  }
});

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


document.addEventListener("DOMContentLoaded", () => {
  const isProfileFilled = checkProfileFilled();

  if (isProfileFilled) {
    displayProfileInfo();
    displayPets("adoptedPets", "adopted-pets");
    displayPets("fosteredPets", "fostered-pets");
  } else {
    document.getElementById("profile-info").classList.add("hidden");
    document.getElementById("profile-empty").classList.remove("hidden");
  }
});

function checkProfileFilled() {
  const firstName = localStorage.getItem("fosterFirstName");
  const lastName = localStorage.getItem("fosterLastName");
  const email = localStorage.getItem("fosterEmail");
  return firstName && lastName && email; // Check if essential profile fields are present
}

function displayProfileInfo() {
  const firstName = localStorage.getItem("fosterFirstName") || "N/A";
  const lastName = localStorage.getItem("fosterLastName") || "N/A";
  const email = localStorage.getItem("fosterEmail") || "N/A";
  const phone = localStorage.getItem("fosterPhone") || "N/A";
  const address = localStorage.getItem("fosterAddress") || "N/A";
  const animalType = localStorage.getItem("fosterAnimalType") || "N/A";
  const availability = localStorage.getItem("fosterAvailability") || "N/A";
  const message = localStorage.getItem("fosterMessage") || "N/A";

  document.getElementById("profile-first-name").textContent = firstName;
  document.getElementById("profile-last-name").textContent = lastName;
  document.getElementById("profile-email").textContent = email;
  document.getElementById("profile-phone").textContent = phone;
  document.getElementById("profile-address").textContent = address;
  document.getElementById("profile-animal-type").textContent = animalType;
  document.getElementById("profile-availability").textContent = availability;
  document.getElementById("profile-message").textContent = message;
}

function displayPets(storageKey, containerId) {
  const storedPets = JSON.parse(localStorage.getItem(storageKey)) || [];
  const container = document.getElementById(containerId);

  container.innerHTML = ''; // Clear previous content

  if (storedPets.length === 0) {
    const noPetsMessage = document.createElement("p");
    noPetsMessage.textContent = "No pets in this category.";
    container.appendChild(noPetsMessage);
    return;
  }

  storedPets.forEach(pet => {
    const petCard = createPetCard(pet); // Use the createPetCard function
    container.appendChild(petCard);
  });
}

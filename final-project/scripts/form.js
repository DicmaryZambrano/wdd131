// Form submission handling
const fosterForm = document.getElementById("foster-application");
fosterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Set local storage flag
  localStorage.setItem("fosterFormFilled", "true");

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const animalType = document.querySelector('input[name="animalType"]:checked').value;
  const availability = document.getElementById("availability").value;
  const message = document.getElementById("message").value;

  // Store values in localStorage
  localStorage.setItem("fosterFirstName", firstName);
  localStorage.setItem("fosterLastName", lastName);
  localStorage.setItem("fosterEmail", email);
  localStorage.setItem("fosterPhone", phone);
  localStorage.setItem("fosterAddress", address);
  localStorage.setItem("fosterAnimalType", animalType);
  localStorage.setItem("fosterAvailability", availability);
  localStorage.setItem("fosterMessage", message);

  alert("Your foster application has been submitted and saved!");

  window.location.href = "final-project/thank-you.html";
});
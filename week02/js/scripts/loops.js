// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato", "Hot Dogs"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};

let list = myInfo.favoriteFoods

list.forEach(food => {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
});

/*
// with .map
const foodsElement = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
}
// this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join('');*/
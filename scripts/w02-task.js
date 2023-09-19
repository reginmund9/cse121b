/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Ramon Vargas";
let currentYear = "2023";
let profilePicture = 'images/myself.PNG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('main picture img'); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);


/* Step 5 - Array */             /*DUDA-no se refleja cuando doy "live server"*/
const favoritefoods=["Rice", "Tika Masala", "Prioshki", "Steak", "Banana Cream Pie"];
foodElement.innerHTML = favoritefoods;

const meal = "potato";
favoritefoods.push(meal);
foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.pop();
foodElement.innerHTML += `<br>${favoritefoods}`;
/*favoritefoods[favoritefoods.length-1];
foodElement.innerHTML += `<br>${favoritefoods}`; */



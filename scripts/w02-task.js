/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
//Declare and instantiate a variable to hold your name. 
//Identify the variable as "fullName".
let fullname = "Ramon Vargas";
let currentYear = new Date().getFullYear();
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
const favoritefoods=["Chicken", "Pizza", "Oat", "Steak", "Apple Cream Pie"];
foodElement.innerHTML = favoritefoods;

const meal = "Cheesecake";
favoritefoods.push(meal);
foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.pop();
foodElement.innerHTML += `<br>${favoritefoods}`;
/*favoritefoods[favoritefoods.length-1];
foodElement.innerHTML += `<br>${favoritefoods}`; */



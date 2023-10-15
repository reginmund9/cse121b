/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ramon Vargas",
    photo: 'images/myself.PNG',
    favoriteFoods: [
        'Rice', 
        'Tikka Masala',
        'Shrimp',
        'Banana Cream Pie' 
    ],
    hobbies: [
        'Play piano',
        'Dancing',
        'Basketball'
    ],
    placeLived: [
        
    ]
};


/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: 'Tarija, Bolivia',
        length: '16 years'
    },
    {
        place: 'San Jose, Costa Rica',
        length: '11 years'
    },
    {
        place: 'Buenos Aires, Argentina',
        length: '1 year'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo; 
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placeLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

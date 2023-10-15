/* W05: Programming Tasks */

/* Declare and initialize global variables */
//const templesElement = document.querySelector('#temples');
const templesElement = document.getElementById('temples');
const templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple) => {

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    // Declare a const variable named response that awaits the built-in fetch method
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // Convert fetch response into a JavaScript object (.json)
    const data = await response.json();
    // Assign the result to the templeList global array variable
    templeList.push(...data);
    // Call the displayTemples function and pass it the list of temples (templeList)
    displayTemples(templeList)
};


/* reset Function */
// Function reset
const reset = () => {
    // Clear all <article> elements from templesElement
    templesElement.innerHTML = '';
  };

/* sortBy Function */
const sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Obtain the value of the HTML element with the ID of sortBy
    //const filter = document.querySelector('#sortBy').innerHTML;
    const filter = document.getElementById('sortBy').value;

    
    // Use a switch statement that uses the filter value as the selector
    switch (filter) {
      case 'utah':
        // Filter for temples where the location contains "Utah" as a string
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        // Filter for temples where the location does not contain "Utah" as a string
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        // Filter for temples where the dedicated date is before 1950
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        // No filter, just use temples as the argument
        displayTemples(temples);
        break;
    }
  };
  
getTemples()
/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
/*document.getElementById('sortBy').addEventListener('change', () => {
    // Call the sortBy function and send an arrow function result with the templeList as the argument
    sortBy(templeList);
  });*/




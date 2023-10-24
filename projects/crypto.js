

// Function to fetch cryptocurrency data from the CoinCap API
async function fetchCryptoData() {
  try {
      const response = await fetch('https://api.coincap.io/v2/assets');
      const data = await response.json();
      return data.data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Function to process and display cryptocurrency data based on the chosen filter
function displayCryptoData(cryptoArray, chosenFilter) {
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = ''; // Clear previous content

  const filteredCryptoData = applyFilter(cryptoArray, chosenFilter);

  if (filteredCryptoData.length === 0) {
      outputContainer.innerHTML = '<p>No cryptocurrency data found.</p>';
  } else {
      const list = document.createElement('ul');

      filteredCryptoData.forEach((crypto) => {
          const listItem = document.createElement('li');

          // Use template literals for string building
          listItem.innerHTML = `
              <strong>${crypto.name}</strong>: ${crypto.symbol}, 
              Market Cap: $${crypto.marketCapUsd}, 
              Change (24h): ${crypto.changePercent24Hr}%
          `;


          list.appendChild(listItem);
      });

      outputContainer.appendChild(list);
  }
}

// Function to apply the filter based on the chosen value
function applyFilter(cryptoArray, chosenFilter) {
  switch (chosenFilter) {
      case 'positive':
          return cryptoArray.filter(crypto => crypto.changePercent24Hr > 0);
      case 'negative':
          return cryptoArray.filter(crypto => crypto.changePercent24Hr < 0);
      case 'above1b':
          return cryptoArray.filter(crypto => parseFloat(crypto.marketCapUsd) > 1000000000);
      default:
          return cryptoArray;
  }
}

// Event listener for the button to get cryptocurrency data
document.getElementById('getDataBtn').addEventListener('click', async () => {
  const filterSelect = document.getElementById('filterSelect');
  const chosenFilter = filterSelect.value;
  
  const cryptoData = await fetchCryptoData();
  displayCryptoData(cryptoData, chosenFilter);
});

let ShowAdsAtIndex = 3;
let data = [];
let clcikCount = 0;



// Fetch the JSON file
// Path to the JSON file
const jsonFilePath = './data.json';

// Fetch the JSON file and process it
fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(res => {
    data = res;
    if (data.length > 0) {
      //navigateTo('home')
      const btn = document.getElementById('home');
      btn.click()
    }
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


// Function to navigate between pages
function navigateTo(page, cardId = null) {

  if (page === "home") {
    clickDirectLink()
    renderHomePage();
  } else if (page === "details" && cardId) {
    clickDirectLink()
    renderDetailsPage(cardId);
  }
}

function clickDirectLink() {
  const link = document.createElement("a");
  link.href = 'https://www.profitablecpmrate.com/emse0dfv?key=7e4d1477af047c755cf0a11179e7f7a7';
  link.target = '_blank'
  link.click();
}

// Render Home page with dynamic cards
// Render Home page with dynamic cards and random ad placement
function renderHomePage() {
  const app = document.getElementById("app");
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Check if data is available
  const totalCards = data.length;

  // Ensure the generateRandomAdPositions function is working
  const adPositions = generateRandomAdPositions(totalCards, Math.ceil(totalCards / 4));

  // Reverse the data array
  const reversedData = [...data].reverse();

  reversedData.forEach((card, index) => {
    // Create the card element
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.onclick = () => navigateTo('details', card.id);

    // Build the card content
    cardElement.innerHTML = `
            <div class='card-image-container'>
                <img class='card-image' src=${card.imageURL} />
                <img class='card-image-play-button' src='assests/icon/play.png' />
            </div>
        `;
    cardContainer.appendChild(cardElement);

    // // Insert an ad at a random position
    // if (adPositions.includes(index + 1)) {
    //     const adElement = document.createElement("div");
    //     adElement.className = "ad300x250";
    //     adElement.innerHTML = ``;
    //     cardContainer.appendChild(adElement);
    // }
  });

  app.appendChild(cardContainer);
}

// Function to generate random positions for ads
function generateRandomAdPositions(totalCards, numAds) {
  const positions = new Set();
  while (positions.size < numAds) {
    const randomPosition = Math.floor(Math.random() * totalCards) + 4; // Random index between 1 and totalCards
    positions.add(randomPosition);
  }
  return Array.from(positions);
}

// Render Details page for a single card
function renderDetailsPage(cardId) {
  // const url = new URL('https://my-video-six.vercel.app/singlepost.html');
  // // url.href = 'https://my-video-six.vercel.app/singlepost.html'
  // url.searchParams.set("id", cardId);
  // window.history.pushState({}, "", url);

  const baseUrl = "singlepost.html"; // Replace with your target page URL
  const params = new URLSearchParams({
    id: cardId,
  });
  window.location.href = `${baseUrl}?${params.toString()}`;

}

// Initialize the app by loading the Home page
document.addEventListener("DOMContentLoaded", () => navigateTo('home'));

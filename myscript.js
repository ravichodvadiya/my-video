let ShowAdsAtIndex = 3;
let data = [];




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
    console.log(res); // Output JSON data in console
    data = res;
    if(data.length > 0) {
      // setTimeout(() => {
        const btn = document.getElementById('home');
        console.log("btn =======>",btn)
        btn.click()
      // }, 2000);

    }
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


// JSON data for cards
// const data = [
//     { id: 1, title: "Card 1", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 1"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 2, title: "Card 2", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 2"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 3, title: "Card 3", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 3"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 4, title: "Card 4", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 3"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 5, title: "Card 5", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 5"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 6, title: "Card 6", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 6"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 7, title: "Card 7", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 7"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 8, title: "Card 8", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 8"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//     { id: 9, title: "Card 9", imageURL: "https://i.postimg.cc/65Rc3xL0/palm-tree-2445107-1280.jpg"
//       , description: "Description for Card 9"
//       , embedCode: '<iframe src="https://www.youtube.com/embed/lkUkPkXydik" title="#massage prank video#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
//     },
//   ];

// Function to navigate between pages
function navigateTo(page, cardId = null) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear existing content

  if (page === "home") {
    renderHomePage();
  } else if (page === "details" && cardId) {
    renderDetailsPage(cardId);
  }
}

// Render Home page with dynamic cards
// Render Home page with dynamic cards and random ad placement
function renderHomePage() {
  const app = document.getElementById("app");
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Check if data is available
  console.log(data); // Make sure `data` is an array and is populated
  const totalCards = data.length;

  // Ensure the generateRandomAdPositions function is working
  const adPositions = generateRandomAdPositions(totalCards, Math.ceil(totalCards / 4));
  console.log(adPositions); // Verify the ad positions are correctly generated

  data.forEach((card, index) => {
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

//   function renderHomePage() {
//     const app = document.getElementById("app");
//     const cardContainer = document.createElement("div");
//     cardContainer.className = "card-container";

//     data.forEach((card, index) => {
//       // Create the card element
//       const cardElement = document.createElement("div");
//       cardElement.className = "card";
//       cardElement.onclick = () => navigateTo('details', card.id);
//       cardElement.innerHTML = `
//         <h3>${card.title}</h3>
//         <p>${card.description}</p>
//       `;
//       cardContainer.appendChild(cardElement);

//       // Insert an ad after every 4 cards
//       if ((index + 1) % ShowAdsAtIndex === 0) {
//         const adElement = document.createElement("div");
//         adElement.className = "ad";
//         adElement.innerHTML = "[Inline Ad]";
//         cardContainer.appendChild(adElement);
//       }
//     });

//     app.appendChild(cardContainer);
//   }
//   function renderHomePage() {
//     const app = document.getElementById("app");
//     const cardContainer = document.createElement("div");
//     cardContainer.className = "card-container";

//     data.forEach((card) => {
//       const cardElement = document.createElement("div");
//       cardElement.className = "card";
//       cardElement.onclick = () => navigateTo('details', card.id);
//       cardElement.innerHTML = `
//         <h3>${card.title}</h3>
//         <p>${card.description}</p>
//       `;
//       cardContainer.appendChild(cardElement);
//     });

//     app.appendChild(cardContainer);
//   }

// Render Details page for a single card
function renderDetailsPage(cardId) {
  const app = document.getElementById("app");
  const card = data.find((card) => card.id === cardId);

  if (card) {
    const cardElement = document.createElement("div");
    cardElement.className = "card details-card-container";
    // <h2>${card.title}</h2>
    // <p>${card.description}</p>
    cardElement.innerHTML = `
        
        ${card.embedCode}
      `;
    // <div class='card-image-container'>
    // <img class='card-image' src=${card.imageURL} />
    // <img class='card-image-play-button' src='assests/icon/play.png' />
    // </div>
    // <button onclick="navigateTo('home')">Back to Home</button>
    app.appendChild(cardElement);
  } else {
    app.innerHTML = "<p>Card not found.</p>";
  }
}

// Initialize the app by loading the Home page
document.addEventListener("DOMContentLoaded", () => navigateTo('home'));

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


function getData() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("id") || 0;

    const app = document.getElementById("singlepost");
    const card = data.find((card) => card.id === name);

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

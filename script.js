const cardContainer = document.getElementById("card-container");

fetch("cards.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(card => {
            const cardCol = document.createElement("div");
            cardCol.className = "col-12 col-md-4 col-lg-2"; // 1, 3, 6 cards per row

            cardCol.innerHTML = `
                <div class="card h-100">
                    <img src="${card.image}" class="card-img-top" alt="${card.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.details}</p>
                    </div>
                </div>
            `;
            cardContainer.appendChild(cardCol);
        });
    })
    .catch(error => console.error("Error loading cards:", error));

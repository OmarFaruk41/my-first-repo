function handleSearch() {
    const searchInputElement = document.getElementById('search-input-field');
    const searchInputValue = searchInputElement.value;
    loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const serverData = await res.json();
    displayPhones(serverData.data);
};

const displayPhones = (data) => {
    console.log(data);
    const cardsContainer = document.getElementById('card-section');

    //  clear previous results
    cardsContainer.innerHTML = '';

    data.forEach(singlePhone => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML = `
            <div class="card-image">
                <img src="${singlePhone.image}" alt="${singlePhone.phone_name}">
            </div>
            <h3 class="card-title">${singlePhone.phone_name}</h3>
            <p class="card-description">
                There are many variations of passages available, but the majority have suffered.
            </p>
            <div class="card-price">
                <span>$</span>
                <span id="card-item-price">999</span>
            </div>
            <div class="card-button">
                <button class="btn">Show Details</button>
            </div>
        `;
        cardsContainer.appendChild(productCard);
    });
};

let restaurants;

function loadingRestJSON() {
    const restaurantId = document.querySelector('.tab-pane');
    let htmlTemp = '';
    for(restaurant of restaurants) {
        htmlTemp += `
            <div class="food-name">
                <div class="food-values">
                    <span class="group-description">${restaurant.foodName}</span>
                    <hr>
                    <span class="number-value">${restaurant.foodPrice}</span>
                </div>
            <span class="text-description">${restaurant.foodDescription}</span>
            </div>
        `;

        if(restaurantId.id === restaurant.restaurantCode) {
            restaurantId.innerHTML = `<div class="restaurant-deal">${htmlTemp}</div>`;
        }
    }
}

async function loadRestaurants() {
    const response = await fetch('../data/restaurants.json');
    restaurants = await response.json();
    loadingRestJSON();
}

loadRestaurants();
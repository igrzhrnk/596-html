(function() {
    let restaurants;

    function loadingRestJSON(selector) {
        const restaurantContainer = document.querySelector('#' + selector);
        let htmlTemp = '';
        let oneRestaurantValue = {};

        oneRestaurantValue = restaurants.filter(e => e.restaurantCode === selector);

        for(const restaurant of oneRestaurantValue) {
                htmlTemp += `
                    <div class="food-name">
                        <div class="food-values">
                            <span class="group-description">${restaurant.foodName}</span>
                            <hr>
                            <span class="number-value">$${restaurant.foodPrice}</span>
                        </div>
                    <span class="text-description">${restaurant.foodDescription}</span>
                    </div>
                `;
            }

        restaurantContainer.innerHTML = `<div class="restaurant-deal">${htmlTemp}</div>`;
    }

    async function loadRestaurants() {
        const response = await fetch('data/restaurants.json');
        restaurants = await response.json();

        loadingRestJSON('salad-bar');
        loadingRestJSON('pizza-italor');
        loadingRestJSON('burger-city');
    }

    loadRestaurants();
}());


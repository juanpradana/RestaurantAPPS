import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const restaurantContainer = document.querySelector('#restaurant');
  const menuMakanan = restaurant.menus.foods.map((food) => food.name).join(', ');
  const menuMinuman = restaurant.menus.drinks.map((drink) => drink.name).join(', ');
  let reviewsPeople = '';
  restaurant.customerReviews.forEach((review) => {
    reviewsPeople += `
            <div class="card">
                <h5>${review.name}</h5>
                <p>Review: ${review.review}</p>
                <p>Pada ${review.date}</p>
            </div>
        `;
  });
  restaurantContainer.innerHTML = `
        <h2 class="restaurant_name">${restaurant.name}</h2>
        <img class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant_info">
            <h3>Tentang Restoran</h3>
            <h4>Alamat</h4>
            <p>${restaurant.address}</p>
            <p>Kota: ${restaurant.city}</p>
            <h4>Menu</h4>
            <p>Makanan: ${menuMakanan}</p>
            <p>Minuman: ${menuMinuman}</p>
        </div>
        <div class="restaurant_description">
            <h3>Deskripsi</h3>
            <p>${restaurant.description}</p>
        </div>
        <div class="reviews">
            <h3 class="review_title">Customer Reviews</h3>
            <div class="restaurant_reviews">
                ${reviewsPeople}
            </div>
        </div>
    `;
};

const createRestaurantItemTemplate = (post) => `
    <article class="post-item" tabindex="0">
        <img class="lazyload post-item__pictureId" data-src="${CONFIG.BASE_IMAGE_URL + post.pictureId}" alt="${post.name}">
        <span class="city">Kota. ${post.city}</span>
        <div class="post-item__content">
            <p class="post-item__rate">Rating: <span class="post-item__rate__number">${post.rating}</span></p>
            <h3 class="post-item__name"><a href="#/detail/${post.id}">${post.name}</a></h3>
            <p class="post-item__description">${post.description}</p>
        </div>
    </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

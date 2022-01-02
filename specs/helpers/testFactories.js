import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonInitiatorWithRestaurant = async (restau) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant:
      restau,
  });
};

export { createLikeButtonInitiatorWithRestaurant };

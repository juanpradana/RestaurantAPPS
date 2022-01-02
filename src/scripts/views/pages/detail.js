import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (err) {
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = `<div class="restaurant-item__not__load restaurants__not__found"><h3>Error: ${err}, swipe up to refresh!</h3></div>`;
    }
  },
};

export default Detail;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
                <h2 class="explore__label">Your Favorite Restaurant</h2>
                <div class="posts">
                
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    try {
      const posts = await FavoriteRestaurantIdb.getAllRestaurants();
      const postsContainer = document.querySelector('.posts');
      if (posts == false) {
        postsContainer.innerHTML += '<div class="restaurant-item__not__found restaurants__not__found"><h3>Tidak Ada Restaurant yang Menjadi Favorite Anda</h3></div>';
      } else {
        posts.forEach((post) => {
          postsContainer.innerHTML += createRestaurantItemTemplate(post);
        });
      }
    } catch (err) {
      console.log(err);
      postsContainer.innerHTML = `<div class="restaurant-item__not__load restaurants__not__found"><h3>Error: ${err}, swipe up to refresh!</h3></div>`;
    }
  },
};

export default FavoritePage;

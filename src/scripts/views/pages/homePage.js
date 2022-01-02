import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
                <h2 class="explore__label">Explore Restaurant</h2>
                <div class="posts">
                
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    try {
      const posts = await RestaurantSource.HomePageData();
      const postsContainer = document.querySelector('.posts');
      posts.forEach((post) => {
        postsContainer.innerHTML += createRestaurantItemTemplate(post);
      });
    } catch (err) {
      postsContainer.innerHTML = `<div class="restaurant-item__not__load restaurants__not__found"><h3>Error: ${err}, swipe up to refresh!</h3></div>`;
      console.log(err);
    }
  },
};

export default HomePage;

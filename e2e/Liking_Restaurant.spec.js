const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.restaurant-item__not__found');
  I.see('Tidak Ada Restaurant yang Menjadi Favorite Anda', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Restaurant yang Menjadi Favorite Anda', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  const firstRestaurant = locate('.post-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedItemName = await I.grabTextFrom('.post-item__name');

  assert.strictEqual(firstRestaurantName, likedItemName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Restaurant yang Menjadi Favorite Anda', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__name a');
  const firstRestaurant = locate('.post-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedItemName = await I.grabTextFrom('.post-item__name');

  assert.strictEqual(firstRestaurantName, likedItemName);

  I.click(locate('.post-item__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__not__found');
  const noFavoriteRestaurant = await I.grabTextFrom('.restaurant-item__not__found');

  assert.strictEqual(noFavoriteRestaurant, 'Tidak Ada Restaurant yang Menjadi Favorite Anda');
});
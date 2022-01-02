import HomePage from '../views/pages/homePage';
import FavoritePage from '../views/pages/favoritePage';
import Detail from '../views/pages/detail';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': Detail,
};

export default routes;

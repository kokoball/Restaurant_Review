import React, { useEffect } from 'react';
import { CategoriesContainer, RestaurantsContainer, RestaurantCreateContainer } from '@components';
import { useDispatch } from 'react-redux';
import restaurants from 'fixtures/restaurants';
import { loadRestaurants, loadCategories } from '@redux/actions/restaurantsActions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
};

export default App;

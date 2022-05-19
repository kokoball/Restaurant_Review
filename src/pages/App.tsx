import React, { useEffect } from 'react';
import {
  RegionsContainer,
  CategoriesContainer,
  RestaurantsContainer,
  RestaurantCreateContainer,
} from '@components';
import { useDispatch } from 'react-redux';
import restaurants from 'fixtures/restaurants';
import {
  loadInitialData,
  loadRestaurants,
  loadCategories,
} from '@redux/actions/restaurantsActions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
};

export default App;

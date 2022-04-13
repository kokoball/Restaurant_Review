import React, { useEffect } from 'react';
import { RestaurantsContainer } from '@components';
import { useDispatch } from 'react-redux';
import restaurants from 'fixtures/restaurants';
import { setRestaurants } from '@redux/actions/restaurantsActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}

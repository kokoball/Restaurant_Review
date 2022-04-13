import React from 'react';
import { Restaurants } from '@components';
import { useTypedSelector } from '@hooks';

export const RestaurantsContainer = () => {
  const { restaurants } = useTypedSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return <Restaurants restaurants={restaurants.restaurants} />;
};

export default RestaurantsContainer;

import React from 'react';
import { RestaurantsData } from '@types';

interface RestaurantProps {
  restaurants: RestaurantsData;
}

export const Restaurants = ({ restaurants }: RestaurantProps) => {
  return (
    <ul>
      {restaurants.map((restaurant: RestaurantsData) => (
        <li key={restaurant.id}>
          {restaurant.name}|{restaurant.category}|{restaurant.address}
        </li>
      ))}
    </ul>
  );
};

export default Restaurants;

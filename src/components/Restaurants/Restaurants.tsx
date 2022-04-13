import React from 'react';
import { RestaurantsData } from '@types';

interface RestaurantProps {
  restaurants: RestaurantsData;
}

export default function Restaurants({ restaurants }: RestaurantProps) {
  return (
    <ul>
      {restaurants.restaurants.map((restaurant: RestaurantsData) => (
        <li key={restaurant.id}>
          {restaurant.name}|{restaurant.category}|{restaurant.address}
        </li>
      ))}
    </ul>
  );
}

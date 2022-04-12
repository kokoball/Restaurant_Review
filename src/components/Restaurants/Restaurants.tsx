import React from 'react';

export default function Restaurants({ restaurants }: any) {
  return (
    <ul>
      {restaurants.map((restaurant: any) => (
        <li key={restaurant.id}>
          {restaurant.name}|{restaurant.category}|{restaurant.address}
        </li>
      ))}
    </ul>
  );
}

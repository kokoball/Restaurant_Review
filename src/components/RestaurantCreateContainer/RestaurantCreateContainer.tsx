import React from 'react';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { RestaurantForm } from '@components';
import { ChangeData } from '@types';

import { addRestaurant, changeRestaurantField } from '@redux/actions/restaurantsActions';

export const RestaurantCreateContainer = () => {
  const dispatch = useTypedDispatch();

  const handleChange = ({ name, value }: ChangeData) => {
    dispatch(changeRestaurantField({ name, value }));
  };
  const handleClick = () => {
    dispatch(addRestaurant());
  };

  const { restaurant } = useTypedSelector((state) => ({
    restaurant: state.restaurants,
  }));

  return (
    <RestaurantForm
      restaurant={restaurant.restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
};

export default RestaurantCreateContainer;

import { RestaurantsData } from '@types';

interface RestaurantProps {
  restaurants: RestaurantsData;
}

export enum ActionType {
  SET_RESTAURANTS = 'SET_RESTAURANTS',
}

export const setRestaurants = (restaurants: RestaurantProps) => {
  return {
    type: ActionType.SET_RESTAURANTS,
    payload: {
      restaurants,
    },
  };
};

export type ActionSetRestaurants = ReturnType<typeof setRestaurants>;

export type Action = ActionSetRestaurants;

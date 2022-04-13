import { ChangeData } from '@types';

interface RestaurantProps {}

export enum ActionType {
  SET_RESTAURANTS = 'SET_RESTAURANTS',
  ADD_RESTAURANTS = 'ADD_RESTAURANTS',
  CHANGE_RESTAURANTS = 'CHANGE_RESTAURANTS',
}

export const setRestaurants = (restaurants: RestaurantProps) => {
  return {
    type: ActionType.SET_RESTAURANTS,
    payload: {
      restaurants,
    },
  };
};

export const addRestaurant = () => {
  return {
    type: ActionType.ADD_RESTAURANTS,
  };
};

export const changeRestaurantField = ({ name, value }: ChangeData) => {
  return {
    type: ActionType.CHANGE_RESTAURANTS,
    payload: {
      name,
      value,
    },
  };
};

export type ActionSetRestaurants = ReturnType<typeof setRestaurants>;
export type ActionAddRestaurant = ReturnType<typeof addRestaurant>;
export type ActionChangeRestaurantField = ReturnType<typeof changeRestaurantField>;

export type Action = ActionSetRestaurants | ActionAddRestaurant | ActionChangeRestaurantField;

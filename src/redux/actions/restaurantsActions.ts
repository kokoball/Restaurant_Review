import { ChangeData } from '@types';
import { fetchCategories } from '@hooks';

interface RestaurantProps {}

interface category {
  id: number | string;
  name: string;
}

export enum ActionType {
  SET_RESTAURANTS = 'SET_RESTAURANTS',
  ADD_RESTAURANTS = 'ADD_RESTAURANTS',
  CHANGE_RESTAURANTS = 'CHANGE_RESTAURANTS',
  SET_CATEGORIES = 'SET_CATEGORIES',
  LOAD_RESTAURANTS = 'LOAD_RESTAURANTS',
  LOAD_CATEGORIES = 'LOAD_CATEGORIES',
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

export const setCategories = (categories: category) => {
  return {
    type: ActionType.SET_CATEGORIES,
    payload: {
      categories,
    },
  };
};

export const loadRestaurants = () => {
  return async (
    dispatch: (arg0: { type: ActionType; payload: { restaurants: RestaurantProps } }) => void,
  ) => {
    const restaurants: any = [];
    dispatch(setRestaurants(restaurants));
  };
};

export const loadCategories = () => {
  return async (
    dispatch: (arg0: { type: ActionType; payload: { categories: category } }) => void,
  ) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
};

export type ActionSetRestaurants = ReturnType<typeof setRestaurants>;
export type ActionAddRestaurant = ReturnType<typeof addRestaurant>;
export type ActionChangeRestaurantField = ReturnType<typeof changeRestaurantField>;
export type ActionSetCategories = ReturnType<typeof setCategories>;
export type ActionLoadRestaurants = ReturnType<typeof loadRestaurants>;
export type ActionLoadCategories = ReturnType<typeof loadCategories>;

export type Action =
  | ActionSetRestaurants
  | ActionAddRestaurant
  | ActionChangeRestaurantField
  | ActionSetCategories
  | ActionLoadRestaurants
  | ActionLoadCategories;

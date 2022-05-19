import { ChangeData } from '@types';
import { fetchCategories, fetchRegions } from '@hooks';

interface RestaurantProps {}

interface category {
  id: number | string;
  name: string;
}

export enum ActionType {
  LOAD_INITIALDATA = 'LOAD_INITIALDATA',
  SET_RESTAURANTS = 'SET_RESTAURANTS',
  ADD_RESTAURANTS = 'ADD_RESTAURANTS',
  CHANGE_RESTAURANTS = 'CHANGE_RESTAURANTS',
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_REGIONS = 'SET_REGIONS',
  LOAD_RESTAURANTS = 'LOAD_RESTAURANTS',
  LOAD_CATEGORIES = 'LOAD_CATEGORIES',
}

export const loadInitialData = () => {
  return async (dispatch) => {
    const regions = await fetchRegions();
    const categories = await fetchCategories();
    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
};

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
export const setRegions = (regions) => {
  return {
    type: ActionType.SET_REGIONS,
    payload: {
      regions,
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

export type ActionLoadInitialDate = ReturnType<typeof loadInitialData>;
export type ActionSetRestaurants = ReturnType<typeof setRestaurants>;
export type ActionAddRestaurant = ReturnType<typeof addRestaurant>;
export type ActionChangeRestaurantField = ReturnType<typeof changeRestaurantField>;
export type ActionSetCategories = ReturnType<typeof setCategories>;
export type ActionSetRegions = ReturnType<typeof setRegions>;
export type ActionLoadRestaurants = ReturnType<typeof loadRestaurants>;
export type ActionLoadCategories = ReturnType<typeof loadCategories>;

export type Action =
  | ActionLoadInitialDate
  | ActionSetRestaurants
  | ActionAddRestaurant
  | ActionChangeRestaurantField
  | ActionSetCategories
  | ActionSetRegions
  | ActionLoadRestaurants
  | ActionLoadCategories;

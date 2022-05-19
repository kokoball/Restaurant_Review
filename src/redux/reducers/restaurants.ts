import { Action, ActionType } from '@redux/actions/restaurantsActions';

const initialRestaurant = { name: '', category: '', address: '' };

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: initialRestaurant,
  categories: [],
};

export const restaurantsReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.SET_RESTAURANTS: {
      const { restaurants } = payload;
      return {
        ...state,
        restaurants,
      };
    }
    case ActionType.CHANGE_RESTAURANTS: {
      const { name, value } = payload;
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          [name]: value,
        },
      };
    }
    case ActionType.ADD_RESTAURANTS: {
      const { newId, restaurants, restaurant } = state;
      return {
        ...state,
        newId: newId + 1,
        restaurants: [...restaurants, { ...restaurant, id: newId }],
        restaurant: initialRestaurant,
      };
    }
    case ActionType.SET_CATEGORIES: {
      const { categories } = payload;
      return {
        ...state,
        categories,
      };
    }
    case ActionType.SET_REGIONS: {
      const { regions } = payload;
      return {
        ...state,
        regions,
      };
    }

    default:
      return state;
  }
};

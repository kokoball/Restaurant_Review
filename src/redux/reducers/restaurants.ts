import { Action, ActionType } from '@redux/actions/restaurantsActions';

const initialState = {
  restaurants: [],
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
    default:
      return state;
  }
};

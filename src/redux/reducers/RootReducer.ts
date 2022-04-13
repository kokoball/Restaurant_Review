import { combineReducers } from 'redux';

import { restaurantsReducer } from '@redux/reducers/restaurants';

// @NOTE: reducer를 하나로 합치는 역할
const RootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

export type RootReducerType = ReturnType<typeof RootReducer>;
export default RootReducer;

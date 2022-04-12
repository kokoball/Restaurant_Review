const initialState = {
  restaurants: [],
};

export default function reducer(state = initialState, action: any) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }
  return state;
}

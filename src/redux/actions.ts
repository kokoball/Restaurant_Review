export function setRestaurants(restaurants: any) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

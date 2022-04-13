export default interface RestaurantsData {
  map(arg0: (restaurant: RestaurantsData) => JSX.Element): import('react').ReactNode;
  restaurants: any;
  id: number;
  name: string;
  category: string;
  address: string;
}

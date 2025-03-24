export interface Dish {
  id: string;
  title: string;
  description: string;
  price: number;
  calories: number;
  image: { url: string; alt: string };
}

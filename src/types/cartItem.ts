export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: { url: string; alt: string };
  quantity: number;
}

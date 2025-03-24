import { Dish } from "@/types/dish";

interface DishesListProps {
  dishes: Dish[];
}

export default function DishesList({ dishes }: DishesListProps) {
  return <ul>MenuList</ul>;
}

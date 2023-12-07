import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return <Dish {...props} dish={dish} />;
};

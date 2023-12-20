import { useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/ui/cart";
import { selectDishAmount } from "../../redux/ui/cart/selector";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  const dispatch = useDispatch();
  const increment = () => dispatch(cartActions.increment(dishId));
  const decrement = () => dispatch(cartActions.decrement(dishId));
  const amount = useSelector((state) => selectDishAmount(state, { dishId }));

  return (
    <Dish
      {...props}
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};

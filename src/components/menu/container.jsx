import { useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDishes } from "../../redux/entities/dish/thunk/get-dishes";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);

  return <Menu {...props} dishIds={restaurantDishIds} />;
};

import { useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );
  return <Menu {...props} dishIds={restaurantDishIds} />;
};

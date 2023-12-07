import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return <Tab {...props}>{restaurant?.name}</Tab>;
};

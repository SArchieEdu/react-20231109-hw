import { useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { useDispatch } from "react-redux";
import { getDishes } from "../../redux/entities/dish/thunk/get-dishes";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/use-request";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const MenuContainer = ({ ...props }) => {
  const { restaurantId } = useParams();
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );
  const loadingStatus = useRequest(getDishes, restaurantId);

  if (loadingStatus === LOADING_STATUS.loading) {
    return "Loading";
  }

  return <Menu {...props} dishIds={restaurantDishIds} />;
};

import { useEffect } from "react";
import { RestaurantsPage } from "./component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunk/get-restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantLoadingStatus } from "../../redux/entities/restaurant/selectors";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { useRequest } from "../../hooks/use-request";

export const RestaurantsPageContainer = () => {
  useRequest(getRestaurants);
  return <RestaurantsPage />;
};

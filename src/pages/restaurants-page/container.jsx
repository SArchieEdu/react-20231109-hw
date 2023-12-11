import { useEffect } from "react";
import { RestaurantsPage } from "./component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunk/get-restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantLoadingStatus } from "../../redux/entities/restaurant/selectors";

export const RestaurantsPageContainer = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (loadingStatus === "pending") {
    return "loading";
  }

  return <RestaurantsPage />;
};

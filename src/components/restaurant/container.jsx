import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

function getRestaurantFromResult(restaurantId, result) {
  return {
    ...result,
    data: result?.data?.find(({ id }) => id === restaurantId),
  };
}

export const RestaurantContainer = ({ restaurantId }) => {
  const {
    data: restaurant,
    isFetching,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: getRestaurantFromResult.bind(null, restaurantId),
  });

  if (isFetching) {
    return "Loading";
  }

  if (isError) {
    return "Error";
  }

  return <Restaurant restaurant={restaurant} />;
};

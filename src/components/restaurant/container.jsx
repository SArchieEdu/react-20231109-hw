import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

function getRestaurantFromResult(restaurantId, result) {
  return {
    ...result,
    data: result?.data?.find(({ id }) => id === restaurantId),
  };
}

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
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

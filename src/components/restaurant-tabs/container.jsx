import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantTabsContainer = (props) => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "Error";
  }

  return <RestaurantTabs restaurants={restaurants} {...props} />;
};

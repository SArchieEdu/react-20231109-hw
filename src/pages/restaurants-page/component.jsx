import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
      />
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};

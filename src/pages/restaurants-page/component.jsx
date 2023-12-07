import { useState } from "react";
import { Layout } from "../../components/layout/component";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(0);

  return (
    <Layout>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && activeRestaurantId !== "All" && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};

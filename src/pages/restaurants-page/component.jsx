import { useState } from "react";
import { Layout } from "../../components/layout/component";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};

import { useState } from "react";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";
import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";
import { CartContainer } from "../../components/cart/container";

export const RestaurantsPage = () => {
  const [amount, setAmount] = useState(0);

  useLayoutEffect(() => {
    const callback = () => console.log("scroll");
    document.addEventListener("scroll", callback);

    return () => document.removeEventListener("scroll", callback);
  }, []);

  return (
    <div>
      <button onClick={() => setAmount(amount + 1)}>click</button>
      <RestaurantTabsContainer />
      <Outlet />
      <CartContainer />
    </div>
  );
};

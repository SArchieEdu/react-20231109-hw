import { Outlet } from "react-router-dom";
import { CreateReviewContainer } from "../create-reveiw-form/container";
import { NavLink } from "react-router-dom";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
      <CreateReviewContainer restaurantId={restaurant.id} />
    </div>
  );
};

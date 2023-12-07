import { MenuContainer } from "../menu/container";
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewForm />
    </div>
  );
};

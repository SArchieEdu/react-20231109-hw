import { Menu } from "../menu/component";
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <ReviewForm />
    </div>
  );
};

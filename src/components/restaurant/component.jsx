import { CreateReviewContainer } from "../create-reveiw-form/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ReviewsContainer restaurantId={restaurant.id} />
      <CreateReviewContainer restaurantId={restaurant.id} />
    </div>
  );
};

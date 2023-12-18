import { useGetReviewsQuery } from "../../redux/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
  const {
    data: reviews,
    isFetching,
    isError,
  } = useGetReviewsQuery(restaurantId);

  if (isFetching) {
    return "loading";
  }

  if (isError) {
    return "Error";
  }
  return <Reviews reviews={reviews} />;
};

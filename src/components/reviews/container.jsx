import { useParams } from "react-router-dom";
import { useGetReviewsQuery } from "../../redux/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
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

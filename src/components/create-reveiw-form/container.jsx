import { useCreateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component";

export const CreateReviewContainer = ({ restaurantId }) => {
  const [createReview, result] = useCreateReviewMutation();

  if (result.isLoading) {
    return "Creating...";
  }

  return (
    <ReviewForm
      onSave={(newForm) =>
        createReview({
          restaurantId,
          newReview: {
            ...newForm,
            userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
          },
        })
      }
    />
  );
};

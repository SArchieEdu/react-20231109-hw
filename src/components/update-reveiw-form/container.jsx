import { useEffect } from "react";
import { useUpdateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/component";

export const UpdateReviewContainer = ({ review, onUpdateFinished }) => {
  const [updateReview, result] = useUpdateReviewMutation();

  const isUpdateFinished = result.isSuccess;

  useEffect(() => {
    if (isUpdateFinished) {
      onUpdateFinished();
    }
  }, [isUpdateFinished, onUpdateFinished]);

  if (result.isLoading) {
    return "Creating...";
  }

  return (
    <ReviewForm
      initialState={review}
      onSave={(updated) =>
        updateReview({
          reviewId: review.id,
          review: { ...review, ...updated },
        })
      }
    />
  );
};

import { useState } from "react";
import { UserContainer } from "../user/container";
import { Button } from "../button/component";
import { UpdateReviewContainer } from "../update-reveiw-form/container";
import { useCallback } from "react";

export const Review = ({ review }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onUpdateFinished = useCallback(() => setIsEditing(false), []);

  return (
    <div>
      <Button onClick={() => setIsEditing(!isEditing)}>switch Mode</Button>

      {isEditing ? (
        <UpdateReviewContainer
          review={review}
          onUpdateFinished={onUpdateFinished}
        />
      ) : (
        <div>
          <p>{review.rating}</p>
          <p>{review.text}</p>
          <UserContainer userId={review.userId} />
        </div>
      )}
    </div>
  );
};

import React from "react";
import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => {
        <React.Fragment key={review.id}>
          <span>{index}</span>
          <Review review={review} />;
        </React.Fragment>;
      })}
    </div>
  );
};

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => ({
        url: `restaurant/${restaurantId}`,
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "ALL" },
            { type: "Review", id: restaurantId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result, _, { reviewId }) => [
        { type: "Review", id: reviewId },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = api;

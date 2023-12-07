import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, codec) => {
      acc[codec.id] = codec;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
});

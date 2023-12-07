import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, codec) => {
      acc[codec.id] = codec;

      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});

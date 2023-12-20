import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] + 1 : 1;
    },
    decrement: (state, { payload }) => {
      state[payload] = state[payload] > 0 ? state[payload] - 1 : 0;
    },
  },
});

export const cartActions = cartSlice.actions;

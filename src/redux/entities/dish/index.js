import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunk/get-dishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState({ status: "idle" }),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.upsertMany(state, payload);
        state.status = "fulfilled";
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = "rejected";
      }),
});

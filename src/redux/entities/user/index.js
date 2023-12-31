import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, codec) => {
      acc[codec.id] = codec;

      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
});

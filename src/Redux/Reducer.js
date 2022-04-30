import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = dataSlice.actions;

export default dataSlice.reducer;

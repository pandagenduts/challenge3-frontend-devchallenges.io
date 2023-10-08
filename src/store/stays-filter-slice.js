import { createSlice } from "@reduxjs/toolkit";

const staysFilterInit = {
  location: "Helsinki",
  guests: 0,
  doTheSearch: true,
};

const staysFilterSlice = createSlice({
  name: "Stays Filter",
  initialState: staysFilterInit,
  reducers: {
    setLocation: (state, action) => {
      console.log(action);
    },
    setGuests: (state, action) => {
      if (action.payload === "ADD") {
        state.guests = state.guests + 1;
      } else if (action.payload === "DECREASE") {
        state.guests > 0 ? (state.guests = state.guests - 1) : undefined;
      }
    },
    setDoTheSearch: (state) => {
      state.doTheSearch = !state.doTheSearch;
    },
  },
});

export const staysFilterActions = staysFilterSlice.actions;

export default staysFilterSlice.reducer;

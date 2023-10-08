import { createSlice } from "@reduxjs/toolkit";

const staysFilterInit = {
  location: "Helsinki",
  guests: {
    totalGuests: 0,
    adults: 3,
    children: 0,
  },
  doTheSearch: true,
};

const staysFilterSlice = createSlice({
  name: "Stays Filter",
  initialState: staysFilterInit,
  reducers: {
    setLocation: (state, action) => {
      console.log(action);
    },
    setTotalGuests: (state, action) => {
      if (action.payload === "ADD") {
        state.guests.totalGuests = state.guests.totalGuests + 1;
      } else if (action.payload === "DECREASE") {
        state.guests.totalGuests > 0
          ? (state.guests.totalGuests = state.guests.totalGuests - 1)
          : undefined;
      }
    },
    setDoTheSearch: (state) => {
      state.doTheSearch = !state.doTheSearch;
    },
  },
});

export const staysFilterActions = staysFilterSlice.actions;

export default staysFilterSlice.reducer;

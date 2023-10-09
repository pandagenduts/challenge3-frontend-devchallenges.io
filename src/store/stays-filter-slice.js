import { createSlice } from "@reduxjs/toolkit";

const staysFilterInit = {
  location: "",
  guests: {
    totalGuests: 0,
    adults: 0,
    children: 0,
  },
  doTheSearch: true,
};

const staysFilterSlice = createSlice({
  name: "Stays Filter",
  initialState: staysFilterInit,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAdults: (state, action) => {
      if (action.payload === "ADD") {
        state.guests.adults = state.guests.adults + 1;
        state.guests.totalGuests = state.guests.totalGuests + 1;
      } else if (action.payload === "DECREASE") {
        if (state.guests.adults > 0) {
          state.guests.adults = state.guests.adults - 1;
          state.guests.totalGuests = state.guests.totalGuests - 1;
        }
      }
    },
    setChildren: (state, action) => {
      if (action.payload === "ADD") {
        state.guests.children = state.guests.children + 1;
        state.guests.totalGuests = state.guests.totalGuests + 1;
      } else if (action.payload === "DECREASE") {
        if (state.guests.children > 0) {
          state.guests.children = state.guests.children - 1;
          state.guests.totalGuests = state.guests.totalGuests - 1;
        }
      }
    },
    setDoTheSearch: (state) => {
      state.doTheSearch = !state.doTheSearch;
    },
  },
});

export const staysFilterActions = staysFilterSlice.actions;

export default staysFilterSlice.reducer;

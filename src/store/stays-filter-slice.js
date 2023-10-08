import { createSlice } from "@reduxjs/toolkit";

const staysFilterInit = {
  location: 'Helsinki',
  guests: 0,
  doTheSearch: true,
}

const staysFilterSlice = createSlice({
  name: 'Stays Filter',
  initialState: staysFilterInit,
  reducers: {
    setLocation: (state, action) => {

    },
    setGuests: (state, action) => {

    },
    setDoTheSearch: (state) => {
      state.doTheSearch = !state.doTheSearch;
    }
  }
})

export const staysFilterActions = staysFilterSlice.actions;

export default staysFilterSlice.reducer;
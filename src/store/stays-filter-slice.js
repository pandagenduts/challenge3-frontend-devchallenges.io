import { createSlice } from "@reduxjs/toolkit";

const staysFilterInit = {
  location: '',
  guests: 0,
}

const staysFilterSlice = createSlice({
  name: 'Stays Filter',
  initialState: staysFilterInit,
  reducers: {
    setLocation: (state, action) => {

    },
    setGuests: (state, action) => {

    }
  }
})

export const staysFilterActions = staysFilterSlice.actions;

export default staysFilterSlice.reducer;
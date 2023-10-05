import { createSlice } from "@reduxjs/toolkit";

const initUI = {
  showPopupMenu: true,
}

const UISlice = createSlice({
  name: 'UI Slice',
  initialState: initUI,
  reducers: {
    togglePopupMenu: (state) => {
      state.showPopupMenu = !state.showPopupMenu
    },
  }
})

export const UIActions = UISlice.actions;

export default UISlice.reducer;
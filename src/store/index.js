import { configureStore } from "@reduxjs/toolkit";
import staysFilterReducer from "./stays-filter-slice";
import UIReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    theUI: UIReducer,
    staysFilter: staysFilterReducer,
  }
})

export default store;
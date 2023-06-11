import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";

const rootReducer = combineReducers({ todo: todoSlice.reducer });

export default rootReducer;

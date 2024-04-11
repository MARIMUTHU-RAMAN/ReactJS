import { configureStore } from "@reduxjs/toolkit";
import CombineReducer from "./CombineReducer";
// import ReducerDefinitionSlicer from "./ReducerDefinitionSlicer";

const store = configureStore({
  reducer:{
       multipleReducers : CombineReducer,
  }  
});

export default store;

import { combineReducers } from "@reduxjs/toolkit";
import ReducerDefinitionSlicer from "./ReducerDefinitionSlicer";
import ChangeBgColorSlicer from "./ChangeBgColorSlicer";
import FetchApiSlicer from "./FetchApiSlicer";

const CombineReducer = combineReducers({
  counterReducer: ReducerDefinitionSlicer,
  backgroundReducer: ChangeBgColorSlicer,
  fetchApiDataReducer: FetchApiSlicer
});

export default CombineReducer;

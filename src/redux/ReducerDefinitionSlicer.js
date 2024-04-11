import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const ReducerDefinitionSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementTheCounter: (state, action) => {
      state = action.payload + 1;
      return state;
    },
    decrementTheCounter: (state, action) => {
      state = action.payload - 1;
      return state;
    },
  },
});

export const { incrementTheCounter, decrementTheCounter } = ReducerDefinitionSlicer.actions;
export default ReducerDefinitionSlicer.reducer;

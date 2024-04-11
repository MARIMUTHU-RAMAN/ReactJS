import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncThunkApiData = createAsyncThunk(
  "getAsyncThunkApiData",
  async (userid) => {
    console.log("userid", userid);

  
      const fetchResponse = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${userid}`
      );
      const data = await fetchResponse.json();
      return data;
    
  }
);

const initialState = {
  usersList: [],
  isLoading: false,
};

const FetchApiSlicer = createSlice({
  name: "getUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncThunkApiData.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAsyncThunkApiData.fulfilled, (state, actions) => {
      state.isLoading = true;
      state.usersList.push(actions.payload);
    });
    builder.addCase(getAsyncThunkApiData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default FetchApiSlicer.reducer;

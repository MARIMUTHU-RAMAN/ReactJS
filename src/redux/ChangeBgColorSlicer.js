import { createSlice } from "@reduxjs/toolkit";

const randomStyleGenrator = () => {
  var color = "";
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? "0" + sub : sub;
  }
  return "#" + color;
};

const initialState = randomStyleGenrator();
const ChangeBgColorSlicer = createSlice({
  name: "colorChnager",
  initialState,
  reducers: {
    changebackgroundColor: () => {
        console.log(randomStyleGenrator());
      return randomStyleGenrator();
    },
  },
});
export const { changebackgroundColor } = ChangeBgColorSlicer.actions;
export default ChangeBgColorSlicer.reducer;

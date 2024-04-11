import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changebackgroundColor } from "../redux/ChangeBgColorSlicer";

function ChangeBackgroundComponent() {
  const backgroundColor = useSelector(
    (colorState) => colorState.multipleReducers.backgroundReducer
  );
  const dispatch = useDispatch();
  const changebackgroundColorHandler = () => {
    dispatch(changebackgroundColor());
  };

  return (
    <div style={{ background: backgroundColor, height: 50 }}>
      {backgroundColor}
      <br />
      <button onClick={changebackgroundColorHandler}>
        Change Background Color
      </button>
    </div>
  );
}

export default ChangeBackgroundComponent;

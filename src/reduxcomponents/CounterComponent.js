import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementTheCounter,
  incrementTheCounter,
} from "../redux/ReducerDefinitionSlicer";

function CounterComponent() {
  const counter = useSelector((state) => state.multipleReducers.counterReducer);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(incrementTheCounter(counter));
  };

  const decrementHandler = () => {
    dispatch(decrementTheCounter(counter));
  };
  return (
    <>
      Value = {counter}
      <div
        style={{
          padding: "10px",
          gap: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={incrementHandler}>Increment</button>
        </div>
        <div>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default CounterComponent;

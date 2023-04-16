import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuonterAction } from "./counterSlice";

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Counter {state.angka} </div>
      <div>
        <button
          onClick={() => {
            dispatch(cuonterAction.increment());
          }}
        >
          plus
        </button>
        <button
          onClick={() => {
            dispatch(cuonterAction.decrement());
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            dispatch(cuonterAction.reset());
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

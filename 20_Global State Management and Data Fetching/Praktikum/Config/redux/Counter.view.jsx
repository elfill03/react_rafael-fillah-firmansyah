import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./counterSlice";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div>counter {state.angka}</div>
      <div>
        <button
          onClick={() => {
            dispatch(counterAction.increment());
          }}
        >
          plus
        </button>
        <button
          onClick={() => {
            dispatch(counterAction.decrement());
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            dispatch(counterAction.reset());
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Counter;

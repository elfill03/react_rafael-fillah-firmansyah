import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    angka: 110,
  },
  reducers: {
    decrement: (state) => {
      return {
        ...state,
        angka: state.angka - 1,
      };
    },

    reset: (state) => {
      return {
        ...state,
        angka: 110,
      };
    },

    increment: (state) => {
      return {
        ...state,
        angka: state.angka + 110,
      };
    },

  },
});

export const { actions: cuonterAction, reducer: counterReducer } = counterSlice;

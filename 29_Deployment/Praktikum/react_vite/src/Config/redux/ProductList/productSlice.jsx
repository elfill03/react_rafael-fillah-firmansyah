import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      return {
        ...state,
        productList: action.payload,
      };
    },
    add: (state, action) => {
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    },
    delete: (state, action) => {
      return {
        ...state,
        productList: action.payload,
      };
    },
  },
});

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://643b9a2070ea0e660297037c.mockapi.io/products/products")
      .then((response) => {
        dispatch(productAction.set(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const { actions: productAction, reducer: productReducer } = productSlice;

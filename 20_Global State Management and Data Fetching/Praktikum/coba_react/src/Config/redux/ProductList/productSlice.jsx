import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productList: [
    {
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        productList: action.payload,
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

export const { actions: productAction, reducer: productReducer } = productSlice;

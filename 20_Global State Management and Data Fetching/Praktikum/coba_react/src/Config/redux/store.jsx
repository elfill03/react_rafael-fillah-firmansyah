import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import reducer from "./reducer";

// const stored = createStore(reducer, applyMiddleware(thunk));
// export const addProduct = (product) => {
//   return (dispatch, getState) => {
//     const { products } = getState();
//     const productExists = products.find(
//       (u) => u.productName === user.productName
//     );
//     if (productExists) {
//       dispatch(addProductError("Product Name already exists"));
//     } else {
//       dispatch(addProductSuccess(product));
//     }
//   };
// };

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persiststore = persistStore(store);

export default store;

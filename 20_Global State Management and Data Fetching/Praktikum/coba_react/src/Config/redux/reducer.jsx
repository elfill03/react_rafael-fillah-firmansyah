import { combineReducers } from "redux";
import { counterReducer } from "./counterSlice";
import { productReducer } from "./ProductList/productSlice";


const reducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default reducer;

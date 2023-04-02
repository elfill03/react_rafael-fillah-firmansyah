import { useSelector } from "react-redux";

export const useProductListSelector = () =>
  useSelector((state) => state.product.productList);

  
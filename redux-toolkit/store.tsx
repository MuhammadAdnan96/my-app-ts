import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./features/tokenSlice";
import productsReducer from "./features/productsSlice";
import detailReducer from "./features/productDetailSlice";

const store = configureStore({
  reducer: { tokenReducer, productsReducer, detailReducer },
});
export default store;

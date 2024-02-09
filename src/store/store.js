import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import breadcrumbsReducer from "../features/breadcrumbs/breadcrumbsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    breadcrumbs: breadcrumbsReducer,
  },
});

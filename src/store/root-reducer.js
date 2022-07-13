import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReduce } from "./cart/cart.reducer";
import { wishReduce } from "./wishlist/wish.reducer";
import { modalReducer } from "./modal/modal.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReduce,
  wish: wishReduce,
  modal: modalReducer,
});

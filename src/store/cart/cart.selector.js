import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsModalOpen = createSelector(
  [selectCartItems],
  (cart) => cart.isCartOpen
);
export const selectCoupon = createSelector(
  [selectCartItems],
  (cart) => cart.coupons
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
export const selectTaxPercent = (state) => 6;
export const selectTax = createSelector(
  selectCartTotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);
export const selectTotal = createSelector(
  selectCartTotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
);

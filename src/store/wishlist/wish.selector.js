import { createSelector } from "reselect";

const selectWishReducer = (state) => state.wish;

export const selectWishItems = createSelector(
  [selectWishReducer],
  (wish) => wish.wishItems
);

export const selectWishCount = createSelector([selectWishItems], (wishItems) =>
  wishItems.reduce((total, wishItem) => total + wishItem.quantity, 0)
);

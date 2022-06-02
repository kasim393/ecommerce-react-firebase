import { createAction } from "../../utils/reducer/reducer.utils";
import { WISH_ACTION_TYPES } from "./wish.types";

const addWishItem = (wishItems, productToAdd) => {
  // find if wishItems contains productToAdd
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === productToAdd.id
  );
  // if found increment quanitity
  if (existingWishItem) {
    return wishItems.map((wishItem) =>
      wishItem.id === productToAdd.id ? { ...wishItem, quantity: 1 } : wishItem
    );
  }

  // return new array with modified wishItems/ new wish item
  return [...wishItems, { ...productToAdd, quantity: 1 }];
};

const clearWishItem = (wishItems, wishItemtoClear) => {
  return wishItems.filter((wishItems) => wishItems.id !== wishItemtoClear.id);
};

export const addItemToWish = (wishItems, productToAdd) => {
  const newWishItems = addWishItem(wishItems, productToAdd);
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, newWishItems);
};

export const clearItemFromWish = (wishItems, wishItemtoClear) => {
  const newWishItems = clearWishItem(wishItems, wishItemtoClear);
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, newWishItems);
};

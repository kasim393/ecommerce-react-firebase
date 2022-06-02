import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found increment quanitity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemtoRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoRemove.id
  );
  // check if quanitity is equal to 1 , if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItems) => cartItems.id !== cartItemtoRemove.id
    );
  }
  // return back cartitems  with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemtoRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemtoClear) => {
  return cartItems.filter((cartItems) => cartItems.id !== cartItemtoClear.id);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemtoRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemtoClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemtoClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

import { createContext, useState } from "react";
import { useEffect } from "react";

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

export const WishContext = createContext({
  wishItems: [],
  addItemToWish: () => {},
  clearItemFromWish: () => {},
  wishCount: 0,
});

export const WishProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const newWishCount = wishItems.reduce(
      (total, wishItem) => total + wishItem.quantity,
      0
    );
    setWishCount(newWishCount);
  }, [wishItems]);

  const addItemToWish = (productToAdd) => {
    setWishItems(addWishItem(wishItems, productToAdd));
  };

  const clearItemFromWish = (wishItemtoClear) => {
    setWishItems(clearWishItem(wishItems, wishItemtoClear));
  };

  const value = {
    addItemToWish,
    clearItemFromWish,
    wishItems,
    wishCount,
  };

  return <WishContext.Provider value={value}> {children}</WishContext.Provider>;
};

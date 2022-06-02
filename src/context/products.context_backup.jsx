import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop_data.js";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
export const SHOP_DATA2 = [
  {
    name: "Bucket hat",
    id: 1,
    img: product1,
    price: 4,
  },
  {
    name: "Arthur Glasses",
    id: 2,
    img: product2,
    price: 20,
  },
  {
    name: "Black Lamp",
    id: 3,
    img: product3,
    price: 94,
  },
  {
    name: "Blue chair",
    id: 4,
    img: product4,
    price: 32,
  },
  {
    name: "Wood Chair",
    id: 5,
    img: product5,
    price: 15,
  },
  {
    name: "Green chair",
    id: 6,
    img: product6,
    price: 88,
  },
  {
    name: "Vintage Lamp",
    id: 7,
    img: product7,
    price: 20,
  },
  {
    name: "Monster Candy",
    id: 8,
    img: product8,
    price: 1.8,
  },
];
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA2);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
    };

    getCategories();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

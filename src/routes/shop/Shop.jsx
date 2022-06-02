import "./shop.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import ProductDetails from "../product-details/ProductDetails";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:productId" element={<ProductDetails />} />
    </Routes>
  );
};
export default Shop;

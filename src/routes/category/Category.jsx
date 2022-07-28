import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrum from "../../components/breadcrum/BreadCrum";
import Spinner from "../../components/spinner/Spinner";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import ShopCard from "../shop/ShopCard";
import "./category.css";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [filter, setFilter] = useState("");
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   const sorting = (type) => {
  //     if (type === "high") {
  //       setProducts(
  //         categoriesMap[category]?.sort((a, b) => (a.price > b.price ? 1 : -1))
  //       );
  //     } else if (type === "low") {
  //       setProducts(
  //         categoriesMap[category]?.sort((a, b) => (a.price > b.price ? -1 : 1))
  //       );
  //     }
  //   };
  //   sorting(filter);
  // }, [filter, categoriesMap]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <BreadCrum />
      <h1>{category.toUpperCase()}</h1>
      {/* <div className="category-filters">
        <span>New</span>
        <span
          onClick={() => setFilter("high")}
          className={filter === "high" ? "active" : ""}
        >
          High Price
        </span>
        <span
          onClick={() => setFilter("low")}
          className={filter === "low" ? "active" : ""}
        >
          Low Price
        </span>
      </div> */}
      <div className="category-wrapper">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="category-products">
            {products &&
              products.map((product) => (
                <ShopCard key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Category;

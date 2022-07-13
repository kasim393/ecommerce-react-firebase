import "./categoriespreview.css";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/Spinner";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="shop-container">
      <div className="shop-wrapper">
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                  <CategoryPreview
                    key={title}
                    title={title}
                    products={products}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CategoriesPreview;

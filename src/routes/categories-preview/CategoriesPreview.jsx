import "./categoriespreview.css";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="shop-container">
      <div className="shop-wrapper">
        <div>
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
        </div>
      </div>
    </div>
  );
};
export default CategoriesPreview;

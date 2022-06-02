import "./latestproduct.css";
import ShopCard from "../../routes/shop/ShopCard";
import flash_sale from "../../assets/flash_sale.svg";
import right_arrow from "../../assets/right_arrow.svg";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const LatestProduct = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="latest-product-container">
      <div className="latest-product-wrapper">
        <div className="latest-wrapper-head">
          <div>
            <img src={flash_sale} alt="" />
            <h1>Latest Products</h1>
          </div>
          <div>
            <Link to="shop">
              <img src={right_arrow} alt="" />
            </Link>
          </div>
        </div>
        <div className="latest-product">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <Fragment key={title}>
                {products
                  .filter((_, idx) => idx < 2)
                  .map((product) => (
                    <ShopCard
                      key={product.id}
                      product={product}
                      title={title}
                    />
                  ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LatestProduct;

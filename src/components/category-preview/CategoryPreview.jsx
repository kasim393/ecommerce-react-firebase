import ShopCard from "../../routes/shop/ShopCard";
import right_arrow from "../../assets/right_arrow.svg";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      {/* <div className="shop-wrapper-head">
        <h2>{title.toUpperCase()}</h2>
        <Link to={title}>
          <img src={right_arrow} alt="" />
        </Link>
      </div> */}
      <div className="shop-products">
        {products
          // .filter((_, idx) => idx < 3)
          .map((product) => (
            <ShopCard key={product.id} product={product} title={title} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;

import "./breadcrum.css";
import { useParams, Link } from "react-router-dom";

const BreadCrum = () => {
  const params = useParams();
  const { category, productId } = params;

  return (
    <div className="breadcrum-container">
      <Link to="/" className="link">
        <p className="breadcrum-inactive">HomePage</p>
      </Link>
      <span className="breadcrum-dot">&nbsp;</span>

      <Link to={`${category ? "/shop/" + category : "/shop"}`} className="link">
        <p
          className={`${category ? "breadcrum-inactive" : "breadcrum-active"}`}
        >
          {category ? category.toUpperCase() : "Shop"}
        </p>
      </Link>

      {productId && (
        <>
          <span className="breadcrum-dot">&nbsp;</span>
          <p className="breadcrum-active">Product Details</p>
        </>
      )}
    </div>
  );
};
export default BreadCrum;

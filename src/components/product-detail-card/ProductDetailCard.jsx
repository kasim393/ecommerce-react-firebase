import { React, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCartFill, BsFillCartCheckFill, BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart } from "../../store/cart/cart.action";
import ProductImagesSlider from "../product-image-slider/ProductImageSlider";

const ProductDetailCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [selectSize, setSelectSize] = useState(item.size[0]);
  const [selectColor, setSelectColor] = useState(item.color[0]);
  const [newItem, setNewItem] = useState(item);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, newItem));

    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    setNewItem((prev) => ({ ...prev, size: selectSize, color: selectColor }));
  }, [selectSize, selectColor]);

  const clearCart = () => {
    dispatch(clearItemFromCart(cartItems, item));
    toast.warn("Removed from cart!", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  return (
    <>
      <div className="product-detail-main">
        <div className="product-detail-left">
          <ProductImagesSlider singleDataList={item} />
        </div>
        <div className="product-detail-right">
          <div className="product-detail-title">
            <span className="product-detail-title-bg">
              {item.name.split(" ").pop()}
            </span>
            <h1>{item.name}</h1>
          </div>
          {/* <div>
          <b>${item.price}</b>
        </div> */}
          <div className="product-detail-size">
            <span>Select Size</span>
            <div>
              {item.size.map((size) => (
                <p
                  onClick={() => setSelectSize(size)}
                  className={`${selectSize === size ? "active-size" : ""}`}
                >
                  {size.toUpperCase()}
                </p>
              ))}
              {/* <p className="active-size">S</p> */}
            </div>
          </div>
          <div className="product-detail-colors">
            <span>Select Color</span>
            <div>
              {item.color.map((color) => (
                <div className="product-detail-color-wrapper">
                  <div
                    onClick={() => setSelectColor(color)}
                    className={`${
                      selectColor === color
                        ? "product-detail-color active-color"
                        : "product-detail-color"
                    }`}
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                  {selectColor === color && (
                    <BsCheck className="detail-color-icon" />
                  )}
                </div>
              ))}
              {/* <p className="active-size">S</p> */}
            </div>
          </div>

          <div className="add-cart">
            {existingCartItem ? (
              <button className="addedtocart-btn" onClick={clearCart}>
                <BsFillCartCheckFill /> Added
              </button>
            ) : (
              <button className="addtocart-btn" onClick={addProductToCart}>
                <BsFillCartFill /> Add to Cart
              </button>
            )}
            <div>
              <b>${item.price}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="product-additional-detail">
        <div className="product-additional-detail-top">
          <div className="product-detail-title">
            <span className="product-detail-title-bg">Overview</span>
            <h1>Product Information</h1>
          </div>
        </div>
        <hr className="style-six" />
        <div className="product-additional-info">
          <h1>PRODUCT DETAILS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            elementum nec volutpat fusce nisl, adipiscing et sed egestas. Nec
            pulvinar leo posuere gravida sed. Arcu, non tellus faucibus suscipit
            malesuada elementum nec cras tristique. Lectus risus augue semper
            maecenas felis. Purus integer nulla id elementum sed tristique
            faucibus tristique.
          </p>
        </div>
        <div className="product-additional-care">
          <h1>PRODUCT CARE</h1>
          <ul>
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductDetailCard;

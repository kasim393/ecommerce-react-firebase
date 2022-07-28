import "./shopcard.css";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBag, BsBagCheck } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart } from "../../store/cart/cart.action";
import {
  addItemToWish,
  clearItemFromWish,
} from "../../store/wishlist/wish.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectWishItems } from "../../store/wishlist/wish.selector";
import { useEffect, useState } from "react";
const ShopCard = ({ product, title }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const wishItems = useSelector(selectWishItems);
  const [selectSize, setSelectSize] = useState(product?.size[0]);
  const [selectColor, setSelectColor] = useState(product?.color[0]);
  const [newItem, setNewItem] = useState(product);

  useEffect(() => {
    setNewItem((prev) => ({ ...prev, size: selectSize, color: selectColor }));
  }, []);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, newItem));

    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const clearCart = () => {
    dispatch(clearItemFromCart(cartItems, product));
    toast.warn("Removed from cart!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addProductToWish = () => {
    dispatch(addItemToWish(wishItems, product));
    toast.success("Added to Wishlist", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const clearWish = () => {
    dispatch(clearItemFromWish(wishItems, product));
    toast.warn("Removed from Wishlist!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === product.id
  );

  return (
    <div className="shop-card">
      <div className="shop-card-top">
        {/* <span>50%</span> */}
        {existingWishItem ? (
          <IoMdHeart className="outline_heart" onClick={clearWish} />
        ) : (
          <IoMdHeartEmpty
            className="outline_heart"
            onClick={addProductToWish}
          />
        )}
      </div>
      <div className="shop-card-mid">
        <Link
          to={
            params.category ? `${product.id}` : `/shop/${title}/${product.id}`
          }
        >
          <img src={product.img} alt="product-img" className="product-img" />
        </Link>
        <p className="product-title">{product.name}</p>
        <span className="product-cat">{product.subcat}</span>
        <p className="product-price">${product.price}</p>
      </div>
      <div className="shop-card-bottom">
        {existingCartItem ? (
          // <img
          //   src={Circle_btn2}
          //   className="shop-card-botom-btn-circle"
          //   onClick={clearCart}
          // />
          // <BsBagCheck
          //   onClick={clearCart}
          //   className="shop-card-botom-btn-circle"
          // />
          <p onClick={clearCart}>Added</p>
        ) : (
          // <img
          //   src={Circle_btn}
          //   className="shop-card-botom-btn-circle"
          //   onClick={addProductToCart}
          //   alt="circle-btn"
          // />
          // <BsBag
          //   onClick={addProductToCart}
          //   className="shop-card-botom-btn-circle"
          // />
          <p onClick={addProductToCart}>Add to Cart</p>
        )}
      </div>
    </div>
  );
};
export default ShopCard;

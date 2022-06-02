import "./shopcard.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Circle_btn from "../../assets/product-circle-btn.png";
import Circle_btn2 from "../../assets/product-circle-btn_2.png";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart } from "../../store/cart/cart.action";
import {
  addItemToWish,
  clearItemFromWish,
} from "../../store/wishlist/wish.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectWishItems } from "../../store/wishlist/wish.selector";
const ShopCard = ({ product, title }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const wishItems = useSelector(selectWishItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));

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
        <span>50%</span>
        {existingWishItem ? (
          <AiFillHeart className="outline_heart" onClick={clearWish} />
        ) : (
          <AiOutlineHeart
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
          <img src={product.img} alt="" className="product-img" />
        </Link>
        <p className="product-title">{product.name}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <div className="shop-card-bottom">
        {existingCartItem ? (
          <img
            src={Circle_btn2}
            className="shop-card-botom-btn-circle"
            onClick={clearCart}
          />
        ) : (
          <img
            src={Circle_btn}
            className="shop-card-botom-btn-circle"
            onClick={addProductToCart}
          />
        )}
      </div>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};
export default ShopCard;

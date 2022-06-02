import { React } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart } from "../../store/cart/cart.action";
const ProductDetailCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, item));
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
      <div className="product-detail-left">
        <img src={item.img} alt="" />
      </div>
      <div className="product-detail-right">
        <div>
          <h1>{item.name}</h1>
        </div>
        <div>
          <b>${item.price}</b>
        </div>
        <div>
          <p>
            Find both comfort and sophisticated style among our selection of
            furniture. Visit AZ furniture store to browse more and buy.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui...More
          </p>
        </div>

        <div className="add-cart">
          {existingCartItem ? (
            <button className="addedtocart-btn" onClick={clearCart}>
              Added to cart
            </button>
          ) : (
            <button className="addtocart-btn" onClick={addProductToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductDetailCard;

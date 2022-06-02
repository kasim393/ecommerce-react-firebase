import "../../routes/checkout/checkout.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
const CheckOutItem = ({ cartItem }) => {
  const { img, price, name, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  return (
    <div className="checkout-left-bottom-card">
      <div className="checkout-card-left">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <div className="checkout-card-quantity">
            <p>
              <AiOutlineMinusCircle
                onClick={removeItemHandler}
                className="checkout-card-quantity-icon"
              />
            </p>
            <p className="checkout-card-quantity-count">{quantity}</p>
            <p>
              <AiOutlinePlusCircle
                onClick={addItemHandler}
                className="checkout-card-quantity-icon"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="checkout-card-right">
        <p>${price}</p>
        <RiDeleteBin6Line
          onClick={clearItemHandler}
          className="checkout-card-quantity-icon"
        />
      </div>
    </div>
  );
};
export default CheckOutItem;

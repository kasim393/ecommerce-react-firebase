import "./checkout.css";

import BlackBtn from "../../components/blackbtn/BlackBtn";
import { useSelector } from "react-redux";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      {cartTotal ? (
        <div className="checkout-container">
          <div className="checkout-left">
            <div className="checkout-left-top">
              <h1>Cart</h1>
              <span className="checkout-clear">clear</span>
            </div>
            <div className="checkout-left-bottom">
              {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="checkout-right">
            <div className="checkout-card">
              <div>
                <h1>Order Summary</h1>
              </div>
              <div>
                <b>Price</b>
              </div>
              <div>
                <p>Subtotal</p>
                <b>${cartTotal}</b>
              </div>
              <div>
                <p>Shipping Fee</p>
                <b>$4.00</b>
              </div>
              <div>
                <p>Coupon</p>
                <b> $0.00</b>
              </div>
              <hr />
              <div>
                <p>Total Order</p>
                <b className="checkout_total">${cartTotal}</b>
              </div>
              <div>
                <input type="text" placeholder="Enter a coupon code" />
                <button className="checkout_apply">Apply</button>
              </div>
              <div>
                <BlackBtn text="Checkout" className="checkout-btn" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty text="cart" />
      )}
    </>
  );
};
export default CheckOut;

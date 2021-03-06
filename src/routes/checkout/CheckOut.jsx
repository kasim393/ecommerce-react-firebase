import "./checkout.css";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import {
  selectCartItems,
  selectCartTotal,
  selectTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form";
import { clearAllItemFromCart } from "../../store/cart/cart.action";
import { useRef } from "react";
const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { total } = useSelector(selectTotal);
  const dispatch = useDispatch();
  const itemRef = useRef([]);

  const clearItemHandler = () => {
    dispatch(clearAllItemFromCart(cartItems, itemRef.current));
  };
  cartItems.map((item) => {
    itemRef.current.push(item);
  });
  return (
    <>
      {cartTotal ? (
        <>
          <div className="checkout-container">
            <div className="checkout-wrapper">
              <div className="checkout-left">
                <div className="checkout-left-top">
                  <div className="checkout-title">
                    <span className="checkout-title-bg">Cart List</span>
                    <h1>Shopping Cart</h1>
                  </div>
                  <span className="checkout-clear" onClick={clearItemHandler}>
                    Clear
                  </span>
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
                    <p>Tax</p>
                    <b>% 6.00</b>
                  </div>
                  <div>
                    <p>Coupon</p>
                    <b> $0.00</b>
                  </div>
                  <hr />
                  <div>
                    <p>Total Order</p>
                    <b className="checkout_total">${total}</b>
                  </div>
                  {/* <div>
                    <input type="text" placeholder="Enter a coupon code" />
                    <button className="checkout_apply">Apply</button>
                  </div> */}

                  <PaymentForm />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <CartEmpty text="cart" />
      )}
    </>
  );
};
export default CheckOut;

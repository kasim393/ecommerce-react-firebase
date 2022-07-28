import "./ordermodal.css";
import Placed_Order from "../../assets/Placed_Order.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../store/modal/modal.selector";
import { setIsModalOpen } from "../../store/modal/modal.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useRef } from "react";
import { clearAllItemFromCart } from "../../store/cart/cart.action";
import { useNavigate } from "react-router-dom";
const OrderModal = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const itemRef = useRef([]);
  const rndInt = Math.floor(Math.random() * 999999) + 1;
  const navigate = useNavigate();
  cartItems.map((item) => {
    itemRef.current.push(item);
  });
  const toggleIsCartOpen = () => {
    dispatch(clearAllItemFromCart(cartItems, itemRef.current));
    dispatch(setIsModalOpen(!isModalOpen));
    navigate("/");
  };

  return (
    <div className="order-modal">
      <img src={Placed_Order} alt="" />
      <h1>Your order has been placed</h1>
      <div className="order_code">
        <p>Order Code: </p>
        <p>#{rndInt} </p>
      </div>
      <button className="order-modal_btn" onClick={toggleIsCartOpen}>
        close
      </button>
      <span style={{ color: "red", marginTop: "5px" }}>
        Order system is not ready yet! will be available in future
      </span>
    </div>
  );
};
export default OrderModal;

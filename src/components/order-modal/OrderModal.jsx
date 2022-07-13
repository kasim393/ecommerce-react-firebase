import "./ordermodal.css";
import Placed_Order from "../../assets/Placed_Order.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../store/modal/modal.selector";
import { setIsModalOpen } from "../../store/modal/modal.action";
const OrderModal = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const rndInt = Math.floor(Math.random() * 999999) + 1;
  const toggleIsCartOpen = () => dispatch(setIsModalOpen(!isModalOpen));
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
    </div>
  );
};
export default OrderModal;

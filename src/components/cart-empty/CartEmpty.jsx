import "./cartempty.css";
import empty_cart from "../../assets/empty_cart.svg";
import BlackBtn from "../blackbtn/BlackBtn";
import { Link } from "react-router-dom";
const CartEmpty = ({ text }) => {
  return (
    <div className="cartempty-container">
      <div className="cartempty-wrapper">
        <img src={empty_cart} alt="" />
        <h1>Your {text} is empty</h1>
        <p>
          Looks like you haven’t made your choice yet. <br /> Let’s shop!
        </p>
        <Link to="/shop" className="btn">
          <BlackBtn text="Shop" />
        </Link>
      </div>
    </div>
  );
};
export default CartEmpty;

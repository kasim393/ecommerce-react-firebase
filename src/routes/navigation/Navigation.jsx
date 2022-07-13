import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Fragment, useContext } from "react";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Cart_noti from "../../assets/Cart_noti.svg";
import { selectCartCount } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectWishCount } from "../../store/wishlist/wish.selector";
const Navigation = () => {
  const navigate = useNavigate();
  const navigateToAuth = () => {
    navigate("/auth");
  };
  const wishCount = useSelector(selectWishCount);
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);
  return (
    <Fragment>
      <div className="navigation_container">
        <Link to="/">
          <img src={Logo} alt="logo" className="nav_logo" />
        </Link>
        <div className="navbar_search_input">
          <input type="text" placeholder="Search" />
          <FiSearch className="search_icon" />
        </div>
        <div className="navbar_noti">
          {wishCount ? (
            <Link to="/wish">
              <div className="wish_noti">
                <AiOutlineHeart className="wish_icon" />
                <span className="wish_icon_noti"></span>
              </div>
            </Link>
          ) : (
            <Link to="/wish">
              <div className="wish_noti">
                <AiOutlineHeart className="wish_icon" />
              </div>
            </Link>
          )}
          {cartCount ? (
            <Link to="/checkout">
              <img src={Cart_noti} alt="cart" />
            </Link>
          ) : (
            <Link to="/checkout">
              <img src={Cart} alt="cart" />
            </Link>
          )}
        </div>
        {currentUser ? (
          <div>
            <button onClick={signOutUser} className="navbar_btn">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button onClick={navigateToAuth} className="navbar_btn">
              Sign In
            </button>
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

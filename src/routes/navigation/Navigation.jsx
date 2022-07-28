import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { Fragment, useContext, useState } from "react";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import User from "../../assets/user.png";
import Cart_noti from "../../assets/Cart_noti.svg";
import { selectCartCount } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectWishCount } from "../../store/wishlist/wish.selector";
const Navigation = () => {
  const [show, setShow] = useState(false);

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
        <Link to="/" className="link">
          <img src={Logo} alt="logo" className="nav_logo" />
        </Link>
        <div className="navbar_items">
          <Link to="/shop/jackets" className="link">
            <p className="navbar_item">Jackets</p>
          </Link>
          <Link to="/shop/jeans" className="link">
            <p className="navbar_item">Jeans</p>
          </Link>
          <Link to="/shop/shoes" className="link">
            <p className="navbar_item">Shoes</p>
          </Link>
          <Link to="/" className="link">
            <p className="navbar_item">Popular</p>
          </Link>
        </div>
        {/* <div className="navbar_search_input">
          <input type="text" placeholder="Search" />
          <FiSearch className="search_icon" />
        </div> */}
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
            <Link to="/checkout" className="cart_noti">
              <img src={Cart} alt="cart" />
              <span className="cart_icon_noti"></span>
            </Link>
          ) : (
            <Link to="/checkout" className="cart_noti">
              <img src={Cart} alt="cart" />
            </Link>
          )}
        </div>
        {currentUser ? (
          <div className="navbar_profile">
            {/* <button onClick={signOutUser} className="navbar_btn">
              Logout
            </button> */}
            <div className="navbar_profile_name">
              <span>Hello</span>
              <p> {currentUser.displayName || "user"} </p>
            </div>
            <div className="navbar_profile_img">
              <img
                src={currentUser.photoURL || User}
                alt=""
                onClick={() => setShow(!show)}
              />
              {show && (
                <div className="navbar_profile_img_dropdown">
                  <div>
                    <AiOutlineUser />
                    <p>Profile</p>
                  </div>
                  <div>
                    <AiOutlineLogout />
                    <p onClick={signOutUser}>Logout</p>
                  </div>
                </div>
              )}
            </div>
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

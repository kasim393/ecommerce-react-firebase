import "./header.css";
import bannerImg from "../../assets/header_img.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-shape">
          <div className="header-shape_left">
            <span>Sale 70%</span>
            <h1>An Industrial Take on Streetwear</h1>
            <p>
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <Link to="shop">
              <button className="header-btn">Start Shopping</button>
            </Link>
          </div>
          <div className="header-shape_right">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

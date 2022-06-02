import "./header.css";
import bannerImg from "../../assets/bannerImg.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-shape">
          <div className="header-shape_left">
            <h1>
              New collection with <span>15%</span> discount
            </h1>
            <Link to="shop">
              <button className="header-btn">Shop now</button>
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

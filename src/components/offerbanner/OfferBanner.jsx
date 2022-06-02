import "./offerbanner.css";
import offer_banner from "../../assets/offer_banner.png";
import email from "../../assets/Email.svg";
const OfferBanner = () => {
  return (
    <div className="offerbanner">
      <img src={offer_banner} alt="" className="offerbanner_img" />
      <div className="offerbanner_left">
        <h1>Get 10% off your next order</h1>
        <p>Sign up for exclusive offers and news from</p>
      </div>
      <div className="offerbanner_right">
        <div className="offer-input">
          <input type="text" placeholder="Email Address" />
          <img src={email} alt="" className="offer-input-icon" />
        </div>
        <div>
          <button className="offerbanner-btn">Send</button>
        </div>
      </div>
    </div>
  );
};
export default OfferBanner;

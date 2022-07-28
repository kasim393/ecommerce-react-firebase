import "./offerbanner.css";
import { AiOutlineMail } from "react-icons/ai";
const OfferBanner = () => {
  return (
    <div className="offerbanner">
      <div className="offerbanner_left">
        <h1>Get 10% off your next order</h1>
        <p>Sign up for exclusive offers and news from</p>
      </div>
      <div className="offerbanner_right">
        <div className="offer-input">
          <input type="text" placeholder="Email Address" />
          <AiOutlineMail className="offer-input-icon" />
        </div>
        <div>
          <button className="offerbanner-btn">Send</button>
        </div>
      </div>
      <div className="offerbanner_bg">NEWSLETTER</div>
    </div>
  );
};
export default OfferBanner;

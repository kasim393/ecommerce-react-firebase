import "./promotion.css";
import Prom1 from "../../assets/prom1.png";
import Prom2 from "../../assets/prom2.png";
import Prom3 from "../../assets/prom3.png";
import { BiChevronRight } from "react-icons/bi";

const Promotion = () => {
  return (
    <div className="promotion_container">
      <p className="promo_blue">PROMOTIONS</p>
      <div className="promotion_wrapper">
        <p className="prom_title">Our Promotions Events</p>
        <div className="promotion_row">
          <div className="promotion_col_1">
            <div className="promotion_col_top">
              <div>
                <h3>
                  GET UP TO <b>60 %</b>{" "}
                </h3>
                <p>For the summer season</p>
              </div>
              <div>
                <img src={Prom1} alt="" />
              </div>
            </div>
            <div className="promotion_col_bottom">
              <h1>GET 30% Off</h1>
              <p>USE PROMO CODE</p>
              <p className="promotion_code">DINEWEEKENDSALE</p>
            </div>
          </div>
          <div className="promotion_col_2">
            <div className="promotion_col_left">
              <div className="promotion_col_left_top">
                <p>Flex Sweatshirt</p>
                <div>
                  <span>$100.00</span>
                  <b> $75.00</b>
                </div>
              </div>
              <img src={Prom2} alt="" />
              <BiChevronRight className="promotion_card_next" />
            </div>
            <div className="promotion_col_right">
              <div className="promotion_col_right_top">
                <p>Flex Push Button Bomber</p>
                <div>
                  <span>$250.00</span>
                  <b> $190.00</b>
                </div>
              </div>
              <img src={Prom3} alt="" />
              <BiChevronRight className="promotion_card_next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promotion;

import "./footer.css";
import FooterLogo from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-wrapper1">
          <div className="footer-section">
            <img src={FooterLogo} alt="" />
            <h1>
              Shop<span>per</span>
            </h1>
            <h1>Where you can get all the stuff.</h1>
          </div>
        </div>
        <div className="footer-wrapper2">
          <div className="footer-section">
            <p className="footer-list-head">Company</p>
            <br />
            <p className="footer-list-body">About us</p>
            <p className="footer-list-body">press</p>
          </div>
          <div className="footer-section">
            <p className="footer-list-head">Social</p>
            <br />
            <p className="footer-list-body">Instagram</p>
            <p className="footer-list-body">Facebook</p>
          </div>
          <div className="footer-section">
            <p className="footer-list-head">Product</p>
            <br />
            <p className="footer-list-body">Solution</p>
            <p className="footer-list-body">press</p>
          </div>
          <div className="footer-section">
            <p className="footer-list-head">Company</p>
            <br />
            <p className="footer-list-body">Contact Us</p>
            <p className="footer-list-body">press</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

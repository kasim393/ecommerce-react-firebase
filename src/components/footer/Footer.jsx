import "./footer.css";
import FooterLogo from "../../assets/Logo.svg";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-wrapper1">
          <div className="footer-section">
            <img src={FooterLogo} alt="" className="footer-logo" />
            <p className="footer-details">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <FaTwitterSquare className="footer-icon" />
            <FaFacebookSquare className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaGithubSquare className="footer-icon" />
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

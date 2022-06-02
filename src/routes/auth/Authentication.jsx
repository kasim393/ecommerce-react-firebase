import "./authentication.css";
import logo from "../../assets/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };
  return (
    <div className="auth-container">
      <div className="auth-top">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="auth-card-container">
        <div className="auth-card">
          <div className="auth-card-top">
            <h1 onClick={() => setShow(true)} className={show ? "active" : ""}>
              Sign in
            </h1>
            <h1 onClick={() => setShow(false)} className={show ? "" : "active"}>
              Register
            </h1>
          </div>
          <div className="auth-card-bottom">
            {show ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </div>
      <div className="auth-bottom">
        <p>Or sign in with</p>
        <FcGoogle className="google-sign-in" onClick={signInWithGoogle} />
      </div>
    </div>
  );
};
export default Authentication;

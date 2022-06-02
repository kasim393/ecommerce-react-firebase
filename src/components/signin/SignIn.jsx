import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../routes/auth/authentication.css";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye } from "react-icons/ai";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setError("Wrong Email or Password");
          break;
        case "auth/user-not-found":
          setError("User not found");
          break;

        default:
          break;
      }

      if (error.code === "auth/wrong-password") {
        setError("Wrong Email or Password");
      }
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="auth-sign-in">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="email-input">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
          <AiOutlineMail className="input-icons" />
        </div>
        <div className="password-input">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
          <AiOutlineLock className="input-icons" />
          <AiOutlineEye
            onClick={() => setPasswordShown(!passwordShown)}
            className="pass-input-icons"
          />
        </div>
        <span>Forgot password?</span>
        <div className="sign-in-btn">
          <button type="submit">Sign in</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default SignIn;

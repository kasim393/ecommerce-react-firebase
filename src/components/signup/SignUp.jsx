import { useState } from "react";
import "../../routes/auth/authentication.css";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
} from "react-icons/ai";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password not match");
      return;
    }
    if (password.length && confirmPassword.length < 6) {
      setError("Password must be more than 6");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setLoading(true);
      await createUserDocumentFromAuth(user, { displayName });
      setError("");
      setSuccess("Register Successful!!!");
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="auth-sign-up">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="name-input">
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            required
          />
          <AiOutlineUser className="input-icons" />
        </div>
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
        <div className="password-input">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <AiOutlineLock className="input-icons" />
          <AiOutlineEye className="pass-input-icons" />
        </div>

        <div className="sign-in-btn">
          <button disabled={loading} type="submit">
            Register
          </button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};
export default SignUp;

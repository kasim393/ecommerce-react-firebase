import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/auth/Authentication";
import Home from "./routes/home/Home";
import CheckOut from "./routes/checkout/CheckOut";
import Shop from "./routes/shop/Shop";
import WishList from "./routes/wish/WishList";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { selectorCurrentUser } from "./store/user/user.selector";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectorCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="wish" element={<WishList />} />
        </Route>
        <Route
          path="auth"
          // element={<Authentication />}
          element={currentUser ? <Navigate to="/" /> : <Authentication />}
        />
      </Routes>
    </>
  );
}

export default App;

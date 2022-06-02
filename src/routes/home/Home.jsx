// import "./home.css";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import CategoryComponent from "../../components/category/Category.component";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LatestProduct from "../../components/latestproduct/LatestProduct";
import OfferBanner from "../../components/offerbanner/OfferBanner";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <div className="home-container">
      <Outlet />
      <Header />
      <CategoryComponent />
      <LatestProduct />
      <OfferBanner />
      <Footer />
    </div>
  );
};
export default Home;

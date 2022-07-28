// import "./home.css";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import CategoryComponent from "../../components/category/Category.component";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LatestProduct from "../../components/latestproduct/LatestProduct";
import OfferBanner from "../../components/offerbanner/OfferBanner";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import { useEffect } from "react";
import Promotion from "../../components/promotion/Promotion";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <div className="home-container">
      <Outlet />
      <Header />
      <Promotion />
      <Carousel />
      {/* <CategoryComponent />
      <LatestProduct /> */}
      <OfferBanner />
      <Footer />
    </div>
  );
};
export default Home;

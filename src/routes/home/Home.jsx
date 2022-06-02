// import "./home.css";
import { Outlet } from "react-router-dom";
import CategoryComponent from "../../components/category/Category.component";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LatestProduct from "../../components/latestproduct/LatestProduct";
import OfferBanner from "../../components/offerbanner/OfferBanner";

const Home = () => {
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

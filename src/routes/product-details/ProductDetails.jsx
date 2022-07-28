import "./productdetails.css";
import OfferBanner from "../../components/offerbanner/OfferBanner";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import ProductDetailCard from "../../components/product-detail-card/ProductDetailCard";
import BreadCrum from "../../components/breadcrum/BreadCrum";
const ProductDetails = () => {
  const { productId, category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    //listen one time
    const fetchData = async () => {
      let list = [];
      const docRef = doc(db, "categories", category);
      try {
        const querySnapshot = await getDoc(docRef);
        querySnapshot.data().items.forEach((doc) => {
          list.push({ id: doc.id, ...doc });
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="product-details">
        <div className="breadcrum-wrapper">
          <BreadCrum />
        </div>
        <div className="product-detail-wrapper">
          {data.map((item) => (
            <>
              {item.id == productId && (
                <ProductDetailCard key={item.id} item={item} />
              )}
            </>
          ))}
        </div>
      </div>
      {/* <OfferBanner /> */}
      <Footer />
    </>
  );
};
export default ProductDetails;

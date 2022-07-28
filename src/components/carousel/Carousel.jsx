import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import ShopCard from "../../routes/shop/ShopCard";
import { Fragment } from "react";
const Carousel = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="carousel_container">
      <p className="promo_blue">PRODUCTS</p>
      <div className="carousel_wrapper">
        <p className="prom_title">Check What We Have</p>
        <div className="carousel_row">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="mySwiper"
            navigation={true}
            style={{
              "--swiper-navigation-color": "#000",
            }}
            modules={[Navigation]}
          >
            {Object.keys(categoriesMap).map((title, index) => {
              const products = categoriesMap[title];
              return (
                <Fragment key={index}>
                  {products
                    .filter((_, idx) => idx < 2)
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <ShopCard
                          key={product.id}
                          product={product}
                          title={title}
                        />
                      </SwiperSlide>
                    ))}
                </Fragment>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Carousel;

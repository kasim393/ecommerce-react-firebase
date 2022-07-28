import "./product-image-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";

export const productImages = [
  "https://i.ibb.co/Rj9LyVY/thumb.webp",
  "https://i.ibb.co/s5q0NMd/jacket2.webp",
  "https://i.ibb.co/YDP6RRb/jacket1-1.jpg",
  "https://i.ibb.co/SVX1T0J/jacket1.jpg",
  "https://i.ibb.co/R3Z8mVH/jacket2-1.webp",
  "https://i.ibb.co/8XXMzw9/jacket1.webp",
];

const ProductImagesSlider = ({ singleDataList }) => {
  const { img } = singleDataList;
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        // thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImagesSlider;

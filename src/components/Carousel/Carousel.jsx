import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";



const Carousel = () => {
  return (
    <div className="Swiper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src="../../../src/assets/36.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="../../../src/assets/36.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="../../../src/assets/36.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

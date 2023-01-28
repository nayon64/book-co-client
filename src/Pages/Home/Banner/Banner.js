import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
	return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex justify-center items-center max-h-[624px]"
    >
      <SwiperSlide>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1616961961091-a83cbe49116b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1469237559036-c4645cda1a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1444069265785-78ef227de54f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1499115715094-e58b465d8e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
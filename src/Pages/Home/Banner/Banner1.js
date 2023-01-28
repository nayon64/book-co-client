import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore,{ Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Banner1 = () => {

	const bannerContents = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1616961961091-a83cbe49116b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1469237559036-c4645cda1a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1444069265785-78ef227de54f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1499115715094-e58b465d8e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
	console.log(bannerContents)

	return (
    <div>
      <Swiper
        className="flex justify-center items-center h-[400px] w-96 md:w-full"
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {bannerContents?.map((bannerContent, i) => (
          <SwiperSlide key={i}>
            <img className="w-full h-full object-cover" src={bannerContent.imgURL} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Banner1 = () => {
  const bannerContents = [
    {
      imgURL: "https://i.ibb.co/Dkc6JK5/Book3.png",
    },
    {
      imgURL: "https://i.ibb.co/8KzJjqM/book2.png",
    },
    {
      imgURL: "https://i.ibb.co/XjdxRnN/Book1.png",
    },
    {
      imgURL: "https://i.ibb.co/R4t3FzB/Book4.png",
    },
  ];
  console.log(bannerContents);

  return (
    <div>
      <Swiper
        className="flex justify-center items-center h-[300px] w-96 my-12 md:w-full"
        effect={"coverflow"}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
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
            <img
              className="w-full h-full object-cover shadow-xl"
              src={bannerContent.imgURL}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner1;

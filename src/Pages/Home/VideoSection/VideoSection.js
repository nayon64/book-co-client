import React from 'react';
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BookThambail5 from "../../../assets/image/videoThambail/bookv5.PNG"
import BookThambail3 from "../../../assets/image/videoThambail/bookv3.PNG"
import BookThambail4 from "../../../assets/image/videoThambail/bookv4.PNG"
import BookThambail2 from "../../../assets/image/videoThambail/bookvideo1.PNG"
import playButton from "../../../assets/image/play-button.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import { EffectCube, Pagination } from "swiper";
import { useState } from 'react';
const videoFiles = [
  {
    thumbail: BookThambail5,
    video: "https://youtu.be/m0TmzUkXjLA",
  },
  {
    thumbail: BookThambail2,
    video: "https://www.youtube.com/watch?v=GKc_BqAI23A",
  },
  {
    thumbail: BookThambail3,
    video: "https://youtu.be/bXk2ic5qdTU",
  },
  {
    thumbail: BookThambail4,
    video: "https://youtu.be/V5sql0lDEI4",
  },
];


const VideoSection = () => {

	const [bookVideo, setBookVideo] = useState("https://youtu.be/m0TmzUkXjLA");
	const handleVideo = (e) => {
		console.log(e)
		setBookVideo(e.video)
		console.log(bookVideo)
	}

	return (
    <section>
      <div className="flex justify-end my-12">
        <div className="text-white inline-block p-6 text-center border-t-4 border-r-4">
          <h1 className="font-bold text-4xl ">Our Popular Videos</h1>
          <p className="text-lg text-gray-300">
            watch our most popular videos.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 rounded-lg overflow-hidden  border-2 py-6">
        <div className="my-auto p-4 h-full col-span-3">
          <ReactPlayer url={bookVideo} />
        </div>

        <div className="col-span-2 my-auto">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="w-96 h-96"
          >
            {videoFiles.map((file, i) => (
              <SwiperSlide
                key={i}
                className="bg-cover bg-center rounded-2xl bg-no-repeat flex justify-center items-center"
                style={{
                  backgroundImage: `url(${file?.thumbail})`,
                }}
              >
                <img
                  onClick={() => handleVideo(file)}
                  className="w-16 cursor-pointer"
                  src={playButton}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
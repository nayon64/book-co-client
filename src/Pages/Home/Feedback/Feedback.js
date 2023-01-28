import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../conponents/Loader/Loader";
import FeedbackCard from "./FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Feedback = () => {
  const { data: feedbacks = [], isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await fetch(`https://book-co-server.vercel.app/feedbacks`);
      const data = await res.json();
      return data;
    },
  });
  console.log("feedbacks", feedbacks);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="md:mt-16 mt-6">
      <h1 className="text-center text-primary font-bold text-4xl divider">
        Feedbacks
      </h1>
      <div className="md:h-[80vh] h-80 my-12  pr-8  md:pr-16 bg-contain  relative rounded-2xl overflow-hidden flex items-center">
        <Swiper
          direction={"vertical"}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 6000,
          }}
          modules={[Pagination, Autoplay]}
          className="h-5/6 bg-emerald-700 rounded-xl overflow-hidden"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <FeedbackCard feedback={feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="bg-cover w-1/2  h-full absolute bg-no-repeat top-0 right-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Feedback;

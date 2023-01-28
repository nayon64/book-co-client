import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BlogCard from "./BlogCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

const BlogsSection = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`https://book-co-server.vercel.app/blogs`);
      const data = await res.json();
      return data;
    },
  });
  console.log("blogs", blogs);

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <BlogCard blog={blog}></BlogCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsSection;

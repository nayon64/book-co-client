import React from "react";

const BlogCard = ({ blog }) => {
  return (
    
    <div
      className="bg-cever bg-center bg-no-repeat h-96"
      style={{
        backgroundImage: `url(${blog.img})`,
      }}
    >
		  <div className="bg-gradient-to-t from-gray-700 to-gray-700/0 w-full h-full flex flex-col  justify-end p-4">
			  <h3 className="text-white text-2xl font-semibold">{blog?.title.length > 50 ? blog.title.slice(0, 50) + "..." : blog.title}</h3>
			  <hr className="my-3"/>
			  <div className="text-white text-xl font-semibold flex justify-between">
				  <h4>Date</h4>
				  <h4>Read More..</h4>
			  </div>
	  </div>
    </div>
  );
};

export default BlogCard;

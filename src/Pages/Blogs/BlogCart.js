import React from 'react';

const BlogCart = ({ blog }) => {
	const { title, details, img, author, publishedDate } = blog;
	return (
    <div className="card  shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt=""
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body items-center ">
				<h2 className="card-title text-primary font-bold">{title}</h2>
				<div className='self-start'>
					<h5 className='my-0 font-semibold'>{author}</h5>
					<p className='text-sm text-accent'>{publishedDate}</p>
				</div>
        <p className='text-justify'>{details}</p>
      </div>
    </div>
  );
};

export default BlogCart;
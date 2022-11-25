import React from 'react';

const CategoryCart = ({ category }) => {
	const {category:categoryName,details, img}=category
	return (
    <div className="card card-side max-h-40 bg-base-100 shadow-xl overflow-hidden">
      <figure className='w-1/2'>
        <img className='w-full ' src={img} alt="Movie" />
      </figure>
      <div className="p-4 w-1/2">
        <h2 className="card-title text-primary font-bold">{categoryName}</h2>
        <p className='text-gray-500'>{details}</p>
      </div>
    </div>
  );
};

export default CategoryCart;
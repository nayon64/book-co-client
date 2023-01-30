import React from 'react';

const CategoryCart = ({ category }) => {
  const { category: categoryName, details, img } = category
  
  
	return (
    <div className="bg-white p-8 rounded-lg group hover:bg-gray-300 duration-500">
      <figure className='w-24 group-hover:scale-125 duration-500'>
        <img  src={img} alt="Movie" />
      </figure>
      <div >
        <h2 className='text-2xl text-rose-600 font-bold mt-3 mb-2'>{categoryName}</h2>
        <p className='text-lg text-gray-900'>{details}</p>
      </div>
    </div>
  );
};

export default CategoryCart;
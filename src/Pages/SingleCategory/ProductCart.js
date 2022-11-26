import { format } from 'date-fns';
import React from 'react';
import { FaClock, FaMapMarkerAlt, FaUserEdit } from 'react-icons/fa';

const ProductCart = ({ product }) => {
	const { bookName, bookImg,sellerName, bookDescription, publishDate ,sellerLocation, bookUsed, sellingPrice,originalPrice} = product;
	const date = new Date(publishDate);
	console.log(date)
	const pdate= format(date,"pp PP")
	return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={bookImg} alt="Shoes" className="rounded-xl w-24" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{bookName}</h2>
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-primary text-xl flex items-center">
            <FaUserEdit className="text-secondary mr-1 " /> {sellerName}
          </h5>
          <h5 className="font-semibold text-primary  text-lg cursor-pointer">
            Report Product
          </h5>
        </div>
        <p className="text-base flex items-center">
          <FaClock />
          <span className="font-semibold text-lg ml-1"></span> {pdate}
        </p>
        <p className="text-sm text-gray-500">
          {bookDescription.length > 100 ? (
            <span>{bookDescription.slice(0, 100)}...</span>
          ) : (
            bookDescription
          )}
        </p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> {sellerLocation}
          </p>
          <p className="text-end">
            <span className="text-base font-bold">Used : </span> {bookUsed}
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <div className="font-semibold text-2xl text-accent">
            <span className="text-3xl font-bold">${sellingPrice}</span>
            <span className="line-through ml-2">${originalPrice}</span>
					</div>
					<button className='px-2 py-2 bg-primary rounded text-white hover:bg-secondary duration-500'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
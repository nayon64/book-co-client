import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import { FaClock, FaMapMarkerAlt, FaUserEdit } from 'react-icons/fa';

const ProductCart = ({
  product,
  refetch,
  setBookingProduct,
}) => {

  
  const {
    bookName,
    bookImg,
    sellerName,
    bookDescription,
    publishDate,
    sellerLocation,
    bookUsed,
    sellingPrice,
    originalPrice,
    _id,
  } = product;

  const date = new Date(publishDate);
  const pdate = format(date, "pp PP");

  const handleProductReport = (id) => {
    console.log("click", id);
    fetch(`http://localhost:5000/bookReported/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Reported Success fully");
          refetch();
        }
      });
  };

  const handleProductBooking = (product) => {
    setBookingProduct(product);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={bookImg} alt="Shoes" className="rounded-xl w-24" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center text-2xl text-secondary font-bold">
          {bookName}
        </h2>
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-primary text-xl flex items-center">
            <FaUserEdit className="text-secondary mr-1 " /> {sellerName}
          </h5>
          {product?.isReported ? (
            <h5 className="font-semibold text-accent  text-lg cursor-pointer">
              Product Reported
            </h5>
          ) : (
            <h5
              onClick={() => handleProductReport(_id)}
              className="font-semibold text-primary  text-lg cursor-pointer"
            >
              Report To Admin
            </h5>
          )}
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
        <div className="flex justify-between items-center mt-4">
          <div className="font-semibold text-2xl text-accent">
            <span className="text-3xl font-bold">${sellingPrice}</span>
            <span className="line-through ml-2">${originalPrice}</span>
          </div>
          <label
            htmlFor="booking-modal"
            onClick={() => handleProductBooking(product)}
            className="px-2 py-2 bg-primary rounded text-white hover:bg-secondary duration-500 cursor-pointer"
          >
            Book Now
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
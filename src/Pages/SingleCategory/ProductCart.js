import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaClock, FaMapMarkerAlt, FaUserEdit } from 'react-icons/fa';
import checkMark from "../../assets/image/check-mark.png";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import useSeller from '../../hooks/useSeller/useSeller';

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

  const [sellerVarify,setSellerVarify]=useState(false)

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);


  useEffect(() => {
    fetch(
      `https://book-co-server.vercel.app/seller/verifySeller?email=${product?.sellerEmail}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setSellerVarify(data.isVarify);
      });
  }, [product?.sellerEmail]);

  console.log(sellerVarify)

  const date = new Date(publishDate);
  const pdate = format(date, "pp PP");

  const handleProductReport = (id) => {
    console.log("click", id);
    fetch(`https://book-co-server.vercel.app/bookReported/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
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
        <img src={bookImg} alt="Shoes" className="rounded-xl w-20" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center text-xl text-secondary font-bold">
          {bookName}
        </h2>
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-sm text-primary flex items-center">
            <FaUserEdit className="text-secondary mr-1 text-sm" /> {sellerName}{" "}
            {sellerVarify && <img className='w-3 my-auto ml-2' src={checkMark} alt="" />}
          </h5>
          {product?.isReported ? (
            <h5 className="font-semibold text-accent  text-xs cursor-pointer">
              Product Reported
            </h5>
          ) : (
            <h5
              onClick={() => handleProductReport(_id)}
              className="font-semibold text-primary  text-xs cursor-pointer"
            >
              Report To Admin
            </h5>
          )}
        </div>
        <p className="text-xs font-semibold flex items-center">
          <FaClock />
          <span className="font-semibold text-lg ml-1"></span> {pdate}
        </p>
        <p className="text-xs text-gray-500">
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
            <span className="text-sm font-bold">Used : </span> {bookUsed}
          </p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="font-semibold text-sm text-accent">
            <span className="text-xl font-bold">${sellingPrice}</span>
            <span className="line-through ml-2">${originalPrice}</span>
          </div>
          {!isAdmin && !isSeller ? (
            <label
              htmlFor="booking-modal"
              onClick={() => handleProductBooking(product)}
              className="px-2 py-1 bg-primary rounded text-white hover:bg-secondary duration-500 text-sm font-semibold cursor-pointer"
            >
              Book Now
            </label>
          ) : (
            <div>
              <h3 className="font-bold text-red-500">Do Not Book</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
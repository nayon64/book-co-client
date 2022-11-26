import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const SingleCategory = () => {
	const products = useLoaderData()
	const [bookingLoading,setBookingLoading]=useState(false)

	const handleProductBooking = (id) => {
		console.log("click", id);
		setBookingLoading(true)
		
    fetch(`http://localhost:5000/bookBooking/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
			toast.success("Book Booking Successfull");
			setBookingLoading(false)
        }
      });
  };
	console.log(products)
	return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2">
        {products && (
          <div>
            {products.map((product) => (
              <ProductCart
                key={product._id}
                product={product}
                handleProductBooking={handleProductBooking}
                bookingLoading={bookingLoading}
              ></ProductCart>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
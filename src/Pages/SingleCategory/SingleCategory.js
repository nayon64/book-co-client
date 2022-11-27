import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../../conponents/BookingModal/BookingModal';
import ProductCart from './ProductCart';

const SingleCategory = () => {
  const { id } = useParams()

  const [bookingProduct, setBookingProduct] = useState(null)
  
  
  const { data: products = [],isLoading ,refetch} = useQuery({
    queryKey: ["singleCategory"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/singleCategory/${id}`);
      const data = await res.json();
      return data;
    },
  });


	return (
    <div className="max-w-7xl mx-auto">
      <div>
        {products && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
            {products.map((product,i) => (
              <ProductCart
                key={i}
                product={product}
                isLoading={isLoading}
                refetch={refetch}
                setBookingProduct={setBookingProduct}
              ></ProductCart>
            ))}
          </div>
        )}
      </div>
      {bookingProduct &&
        <BookingModal
          setBookingProduct={setBookingProduct}
          bookingProduct={bookingProduct}
          refetch={refetch}
        ></BookingModal>
      }
    </div>
  );
};

export default SingleCategory;
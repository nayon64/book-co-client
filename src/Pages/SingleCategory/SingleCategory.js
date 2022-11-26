import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ProductCart from '../../Shared/ProductCart';

const SingleCategory = () => {
  const {id} = useParams()
  
  const { data: products = [],isLoading ,refetch} = useQuery({
    queryKey: ["singleCategory"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/singleCategory/${id}`);
      const data = await res.json();
      return data;
    },
  });

	const handleProductBooking = (id) => {
		
    fetch(`http://localhost:5000/bookBooking/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Book Booking Successfull");
          refetch()
        }
      });
  };


	return (
    <div className="max-w-7xl mx-auto">
      <div>
        {products && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
            {products.map((product) => (
              <ProductCart
                key={product._id}
                product={product}
                handleProductBooking={handleProductBooking}
                isLoading={isLoading}
                refetch={refetch}
              ></ProductCart>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
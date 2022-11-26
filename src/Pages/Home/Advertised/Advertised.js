import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import ProductCart from "../../../Shared/ProductCart";

const Advertised = () => {
  const { data: advertisedBookItems = [],refetch, isLoading, } = useQuery({
		queryKey: ["advertised"],
		queryFn: async () => {
		const res = await fetch("http://localhost:5000/advertised");
		const data = res.json();
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
          refetch();
        }
      });
  };

  return (
    <section className="md:mt-16 mt-6">
      <h1 className="text-center text-primary font-bold text-4xl">
        Advertised Book Items
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {advertisedBookItems.map((book) => (
          <ProductCart
            key={book._id}
            product={book}
            handleProductBooking={handleProductBooking}
            refetch={refetch}
            isLoading={isLoading}
          ></ProductCart>
        ))}
      </div>
    </section>
  );
};

export default Advertised;

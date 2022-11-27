import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AdvertisedCard from "./AdvertisedCard/AdvertisedCard";

const Advertised = () => {

const [bookingProduct,setBookingProduct]=useState({})

  const {
    data: advertisedBookItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertised");
      const data = res.json();
      return data;
    },
  });

  const handleProductBooking = (product) => {
    console.log(product)
    setBookingProduct(product)
    // fetch(`http://localhost:5000/bookBooking/${id}`, {
    //   method: "PUT",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       toast.success("Book Booking Successfull");
    //       refetch();
    //     }
    //   });
  };
  console.log(bookingProduct)

  return (
    <section className="md:mt-16 mt-6">
      {advertisedBookItems?.length > 0 && (
        <div>
          <h1 className="text-center text-primary font-bold text-4xl">
            Advertised Book Items
          </h1>
          <div className="grid lg:grid-cols-2 gap-4 p-4">
            {advertisedBookItems.map((product) => (
              <AdvertisedCard key={product._id} product={product}></AdvertisedCard>
            ))}
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Advertised;

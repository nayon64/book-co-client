import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../conponents/Loader/Loader";
import AdvertisedCard from "./AdvertisedCard/AdvertisedCard";

const Advertised = () => {

  const {
    data: advertisedBookItems = [],
    isLoading,
  } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch("https://book-co-server.vercel.app/advertised",);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>
  }
  
  return (
    <section className="md:mt-16 mt-6">
      {advertisedBookItems?.length > 0 && (
        <div>
          <div className="flex justify-end my-1 px-8">
            <div className="text-white inline-block p-6 text-center border-t-4 border-r-4">
              <h1 className="font-bold text-4xl ">Our Most Valuable Books</h1>
              <p className="text-lg text-gray-300">
                book is most valuable friend for a people.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 p-4 mt-10">
            {advertisedBookItems.map((product) => (
              <AdvertisedCard
                key={product._id}
                product={product}
              ></AdvertisedCard>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Advertised;

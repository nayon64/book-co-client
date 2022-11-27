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
      const res = await fetch("http://localhost:5000/advertised");
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
          <h1 className="text-center text-primary font-bold text-4xl divider">
            Advertised Book Items
          </h1>
          <div className="grid lg:grid-cols-2 gap-4 p-4 mt-10">
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

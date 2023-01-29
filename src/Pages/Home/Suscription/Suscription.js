import React from "react";
import SuscriptionCard from "./SuscriptionCard";

const Suscription = () => {

  const suscriptions = [
    {
      rate: 25,
      method: "Sign Up",
      details:
        "ubscribe to the Book & Co newsletter to receive timely updates from your favorite books.",
      img: "https://images.unsplash.com/photo-1540593318873-4daf6e6e95e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      styleClass: "bg-white",
      ratingTextStyle: "text-orange-600",
      containerStyle: "top-24",
    },
    {
      rate: 20,
      method: "Sign Up",
      details:
        "ubscribe to the Book & Co newsletter to receive timely updates from your favorite books.",
      img: "https://images.unsplash.com/photo-1575198730340-43a2fa6c1b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      styleClass: "bg-orange-600",
      ratingTextStyle: "text-green-800",
      containerStyle: "top-32",
    },
    {
      rate: 18,
      method: "Sign Up",
      details:
        "ubscribe to the Book & Co newsletter to receive timely updates from your favorite books.",
      img: "https://images.unsplash.com/photo-1563208540-f679e3d5847d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      styleClass: "bg-teal-600",
      ratingTextStyle: "text-amber-700",
      containerStyle: "top-40",
    },
    {
      rate: 15,
      method: "Sign Up",
      details:
        "ubscribe to the Book & Co newsletter to receive timely updates from your favorite books.",
      img: "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=800",
      styleClass: "bg-white",
      ratingTextStyle: "text-orange-600",
      containerStyle: "top-56",
    },
  ];


  return (
    <div className="p-8">
      <div className="text-white inline-block p-6 text-center border-t-4 border-l-4">
        <h1 className="font-bold text-4xl ">Suscription Offers</h1>
        <p className="text-lg text-gray-300">
          complete condition for this offer.
        </p>
      </div>
      <div className="relative mt-12">
        {suscriptions.map((suscribe, i) => (
          <SuscriptionCard key={i} suscribe={suscribe} />
        ))}
      </div>
    </div>
  );
};

export default Suscription;

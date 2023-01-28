import React from 'react';
import { FcInTransit, FcOnlineSupport, FcPrivacy, FcRefresh } from "react-icons/fc";

const OurServices = () => {
	
	return (
    <div className="grid lg:grid-cols-4 gap-3">
      <div className="flex items-center justify-center gap-3 py-6 px-3 bg-emerald-700 text-white hover:bg-emerald-600 duration-500">
        <div className="p-4 bg-white rounded-full flex justify-center items-center ">
          <FcInTransit className="text-5xl" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">Free Shipping</h5>
          <p className="text-base text-gray-200">order over $100</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 py-6 px-3 bg-emerald-700 text-white hover:bg-emerald-600 duration-500">
        <div className="p-4 bg-white rounded-full flex justify-center items-center ">
          <FcPrivacy className="text-5xl" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">Secure Payment</h5>
          <p className="text-base text-gray-200">$100 secure payment</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 py-6 px-3 bg-emerald-700 text-white hover:bg-emerald-600 duration-500">
        <div className="p-4 bg-white rounded-full flex justify-center items-center ">
          <FcRefresh className="text-5xl" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">Easy Returns</h5>
          <p className="text-base text-gray-200">10 days return</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 py-6 px-3 bg-emerald-700 text-white hover:bg-emerald-600 duration-500">
        <div className="p-4 bg-white rounded-full flex justify-center items-center ">
          <FcOnlineSupport className="text-5xl" />
        </div>
        <div>
          <h5 className="text-xl font-semibold">24/7 Support</h5>
          <p className="text-base text-gray-200">call us any time</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
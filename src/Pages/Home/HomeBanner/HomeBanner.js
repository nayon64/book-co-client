import React from 'react';
import Banner1 from '../Banner/Banner1';

const HomeBanner = () => {
	return (
    <div
      className="hero h-[80vh] bg-cover bg-center  my-8 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1516295904088-1ff1398c9596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80")`,
      }}
    >
      <div className="bg-gradient-to-r h-full w-full from-gray-800/70 to-gray-800/40  flex justify-center items-center">
        <div className="grid md:grid-cols-2 py-12  md:px-8 gap-4">
          <div className="md:order-2">
            <Banner1></Banner1>
          </div>
          <div className=" text-center flex flex-col justify-center  bg-white bg-opacity-20 lg:text-start py-6 md:order-1 p-4 md:p-5 rounded-md">
            <h1 className="text-4xl  font-bold text-white leading-tight">
              <span className="text-accent"> Sell</span> your unusable books and
              <span className="text-accent"> buy</span> your necessary books
              easily...
            </h1>
            <p className="py-6 text-xl text-white">
              Find the book your"re looking for easier to read right away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
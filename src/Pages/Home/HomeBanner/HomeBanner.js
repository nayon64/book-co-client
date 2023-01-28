import React from 'react';
import Banner1 from '../Banner/Banner1';

const HomeBanner = () => {
	return (
    <div className="hero py-12 bg-slate-800 mt-6 md:px-8">
      <div className=" grid md:grid-cols-2 gap-4">
        <div className='md:order-2'>
          <Banner1></Banner1>
        </div>
        <div className=" text-center lg:text-start py-6 md:order-1 p-4 md:p-0">
          <h1 className="text-5xl  font-bold text-primary leading-tight">
            <span className="text-accent"> Sell</span> your unusable books and
            <span className="text-accent"> buy</span> your necessary books
            easily...
          </h1>
          <p className="py-6 font-semibold text-xl text-secondary">
            Find the book your"re looking for easier to read right away.
          </p>
          <form>
            <div>
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered border-primary w-full max-w-md"
              />
              <input
                className="btn btn-primary mt-6 md:mt-0 ml-6"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
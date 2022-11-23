import React from 'react';
import readingBook from "../../../assets/image/Reading book-pana.png"

const HomeBanner = () => {
	return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='lg:w-1/2'>
          <img src={readingBook} className="w-full" alt="" />
        </div>
        <div className='lg:w-1/2 text-center lg:text-start py-6'>
          <h1 className="text-5xl  font-bold text-secondary">
            Find the book your"re 
            lookin for easier to read 
            right away...
          </h1>
          <p className="py-6 font-semibold text-xl text-primary">
            Sell your unusable books and buy your favorite books.
          </p>
          <form>
            <div>
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered border-secondary w-full max-w-md"
              />
              <input
                className="btn btn-secondary mt-6 md:mt-0 ml-6"
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
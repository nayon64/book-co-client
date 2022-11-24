import React from 'react';
import readingBook from "../../../assets/image/Reading book-pana.png"

const HomeBanner = () => {
	return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="lg:w-1/2">
          <img src={readingBook} className="w-full" alt="" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-start py-6">
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
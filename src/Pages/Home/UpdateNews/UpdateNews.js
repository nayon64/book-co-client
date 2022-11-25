import React from 'react';
import bookImg from "../../../assets/image/Books_re_8gea.png"
const UpdateNews = () => {
	return (
    <section className="p-4 mt-8">
      <div className="grid md:grid-cols-2 border border-primary rounded-lg overflow-hidden">
        <div>
          <img className="w-full" src={bookImg} alt="" />
        </div>
        <div className="my-auto p-4">
          <h1 className="text-4xl text-primary font-bold">
            NEW BOOK CATEGORY ADD AS SOON AS
          </h1>
          <ol className="text-neutral font-semibold text-xl flex mt-6">
            <span>
              <li>Academic</li>
              <li>Horror</li>
              <li>Computers & Tech</li>
            </span>
            <span className="sm:ml-36 ml-6">
              <li>Kids</li>
              <li>Comics</li>
              <li>Biographies</li>
            </span>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default UpdateNews;
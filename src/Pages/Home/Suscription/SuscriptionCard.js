import React from 'react';

const SuscriptionCard = ({ suscribe }) => {
	// ratingTextStyle;
  return (
    <div className={`sticky  ${suscribe?.containerStyle}`}>
      <div className="flex max-h-[400px] max-w-5xl mx-auto justify-end overflow-hidden mb-40  items-center relative rounded-xl shadow-xl shadow-gray-800 shad">
        <div
          className={`absolute h-[450px] left-0 w-8/12 rounded-r-full ${suscribe?.styleClass}`}
        >
          <div
            className={`bg-white h-[480px] rounded-r-full -mr-8  flex  items-center  bg-opacity-50 `}
          >
            <div className="w-5/6 p-8">
              <h3 className="text-3xl font-bold">
                {" "}
                GET{" "}
                <span className={`${suscribe?.ratingTextStyle} font-extrabold`}>
                  {" "}
                  {suscribe?.rate}%{" "}
                </span>
                OFF{" "}
              </h3>
              <h1 className="text-4xl font-bold mb-3">
                {suscribe?.method} to{" "}
                <span className="text-secondary">Book & Co</span>
              </h1>
              <p>{suscribe?.details} </p>
              <form className="my-3">
                <input
                  className="border-2 border-secondary rounded-md text-lg px-2 py-1 bg-transparent"
                  type="email"
                  name=""
                  id=""
                />
                <input
                  className="bg-secondary py-2 px-4 ml-4 rounded-md text-white cursor-pointer font-semibold hover:bg-slate-700 duration-200"
                  type="button"
                  value="OK"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full " src={suscribe?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SuscriptionCard;
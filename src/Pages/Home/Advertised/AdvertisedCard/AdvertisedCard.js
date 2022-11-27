import React from 'react';
import saleIcon from "../../../../assets/image/saleIcon.png"

const AdvertisedCard = ({ product }) => {
	console.log(product)
	return (
    <div>
      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content  flex-col sm:flex-row">
          <div className="w-full max-h-64 md:w-1/2 flex justify-center">
            <img
              src={product?.bookImg}
              className=" w-full object-cover rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product?.bookName}</h1>
            <p className="py-6">
              {product?.bookDescription.length > 100 ? (
                <span>{product?.bookDescription.slice(0, 100)}...</span>
              ) : (
                product?.bookDescription
              )}
            </p>
            <div className='flex justify-between items-center'>
              <div className="font-semibold text-2xl text-accent">
                <span className="text-3xl font-bold">
                  ${product?.sellingPrice}
                </span>
                <span className="line-through ml-2">
                  ${product?.originalPrice}
                </span>
							</div>
							<img src={saleIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
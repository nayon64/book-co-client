import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const SingleCategory = () => {
	const products = useLoaderData()
	console.log(products)
	return (
    <div className="max-w-7xl mx-auto">
      <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-2'>
        {products && (
          <div>
            {products.map((product) => (
              <ProductCart key={product._id} product={product}></ProductCart>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
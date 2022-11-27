import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCart from './CategoryCart';

const Categorys = () => {

	const {data:categorys=[]} = useQuery({
		queryKey: ["categorys"],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/categorys`);
			const data = await res.json()
			return data
		}
  });
  
	return (
    <section className='md:mt-16 mt-6'>
      <h1 className="text-center text-primary font-bold text-4xl divider">
        Books Categorys
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-4 mt-10">
        {categorys.map((category) => (
          <Link key={category._id} to={`/singleCategory/${category._id}`}>
            <CategoryCart category={category}></CategoryCart>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categorys;
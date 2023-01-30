import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../conponents/Loader/Loader';
import CategoryCart from './CategoryCart';

const Categorys = () => {

	const {data:categorys=[], isLoading} = useQuery({
		queryKey: ["categorys"],
		queryFn: async () => {
			const res = await fetch(`https://book-co-server.vercel.app/categorys`);
			const data = await res.json()
			return data
		}
  });
  
  if (isLoading) {
    return <Loader></Loader>
  }

	return (
    <section className="md:mt-16 mt-6 p-8">
      <div className="text-white inline-block p-6 text-center border-t-4 border-l-4">
        <h1 className="font-bold text-4xl ">Books Categroys</h1>
        <p className="text-lg text-gray-300">get your most favorite book.</p>
      </div>
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
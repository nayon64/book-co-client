import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../conponents/Loader/Loader';
import BlogCart from './BlogCart';

const Blogs = () => {

	const {data:blogs=[],isLoading } = useQuery({
		queryKey: ["blogs"],
		queryFn: async() => {
			const res = await fetch(`https://book-and-co-server.vercel.app/blogs`);
			const data = await res.json()
			return data
		}
		
  })
  
	
  if (isLoading) {
    return <Loader></Loader>
  }

  
	return (
    <div className='max-w-7xl mx-auto mt-6'>
      <h1 className='text-center text-3xl font-bold text-primary'>Our Recents Blogs</h1>
      {blogs && (
        <div className='grid px-4 md:px-0 md:grid-cols-2 gap-5 mt-6'>
          {blogs.map((blog) => (
            <BlogCart key={blog._id} blog={blog}></BlogCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
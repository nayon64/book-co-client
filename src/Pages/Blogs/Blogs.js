import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogCart from './BlogCart';

const Blogs = () => {

	const {data:blogs=[] } = useQuery({
		queryKey: ["blogs"],
		queryFn: async() => {
			const res = await fetch(`http://localhost:5000/blogs`);
			const data = await res.json()
			return data
		}
		
	})
	console.log(blogs)
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
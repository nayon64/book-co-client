import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../conponents/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {

	const {user}=useContext(AuthContext)

	const { data: myBooks = [],isLoading } = useQuery({
    queryKey: ["myBooks"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myBooks?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
	});
	
	if (isLoading) {
		return <Loader></Loader>
	}

	return (
    <div className="min-h-screen border rounded-md ml-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        My Products
      </h2>
      {myBooks && (
        <div className="overflow-x-auto mx-4 md:mx-6">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Sales Status</th>
                <th></th>
              </tr>
            </thead>
            {/* {book.bookDetails.bookImg} */}
            <tbody>
              {myBooks.map((book, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={book?.bookImg} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{book?.bookName}</td>
                  <td>{book?.sellingPrice}</td>
                  <td className='text-center font-bold'>{book.isAvailable? "Availabe":"Sold"}</td>
                  <td className="text-end">
                    <button className="btn sm:btn-sm btn-xs btn-accent text-white rounded">
                      Delete
                    </button>
                    <button className="btn sm:btn-sm btn-xs btn-primary text-white rounded ml-4">
                      Advertised
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!myBooks && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Book Found
        </h2>
      )}
    </div>
  );
};

export default MyProducts;
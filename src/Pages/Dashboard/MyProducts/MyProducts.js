import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../conponents/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {

	const {user}=useContext(AuthContext)

	const { data: myBooks = [],isLoading,refetch } = useQuery({
    queryKey: ["myBooks"],
    queryFn: async () => {
      const res = await fetch(
        `https://book-and-co-server.vercel.app/seller/myBooks?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
	
  const handleAdvertised = (id) => {
    
    fetch(`https://book-and-co-server.vercel.app/seller/advertised/${id}`, {
      method: "PUT",
      headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
    })
      .then(res => res.json())
      .then(data => {
        if (data?.modifiedCount > 0) {
          refetch();
          toast.success("Advertised Successfull");
        } 
    })
  }

  const handleDelete = (id) => {
     fetch(`https://book-and-co-server.vercel.app/admin/reportedItems/${id}`, {
       method: "DELETE",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.acknowledged) {
           refetch();
           toast.success("Book Item Successfully Deleted.");
         }
       });
  }

	if (isLoading) {
		return <Loader></Loader>
	}

	return (
    <div className="min-h-screen border rounded-md ml-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        My Products
      </h2>
      {myBooks?.length > 0 && (
        <div className="overflow-x-auto mx-4 md:mx-6">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th className="text-center">Sales Status</th>
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
                      <div className="w-12 ">
                        <img src={book?.bookImg} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{book?.bookName}</td>
                  <td>{book?.sellingPrice}</td>
                  {/* <td></td> */}
                  <td
                    className={`text-center text-base font-bold ${
                      book?.isAvailable ? "text-green-700" : "text-rose-700"
                    }`}
                  >
                    {book?.isAvailable ? "Availabe" : "Sold"}
                  </td>
                  <td className="text-end">
                    {book?.isAvailable && (
                      <>
                        {book?.isAdvertised ? (
                          <button className="btn sm:btn-sm btn-xs btn-success text-white rounded ">
                            Advertised
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdvertised(book?._id)}
                            className={`btn sm:btn-sm btn-xs btn-primary text-white rounded ml-4 }`}
                          >
                            Advertise
                          </button>
                        )}
                      </>
                    )}
                    <button onClick={()=>handleDelete(book?._id)} className="btn sm:btn-sm ml-4 btn-xs btn-accent text-white rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {myBooks.length === 0 && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Book Found
        </h2>
      )}
    </div>
  );
};

export default MyProducts;